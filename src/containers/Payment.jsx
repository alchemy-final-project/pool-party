import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DateDropdowns from '../components/dateDropdowns/DateDropdowns';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { post } from '../services/request';
import styles from './Payment.css';

const cardOptions = {
  iconStyle: 'solid',
  hidePostalCode: false,
  style: {
    base: {
      iconColor: 'rgb(240, 57, 122)',
      color: 'rgb(240, 57, 122)',
      fontSize: '16px',
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF'
      }
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238'
      }
    }
  }
};

function Payment() {

  const [rentYear, setRentYear] = useState('2021');
  const [rentMonth, setRentMonth] = useState('1');
  const history = useHistory();

  const onRentYearChange = (value) => {
    setRentYear(value);
  };

  const onRentMonthChange = (value) => {
    setRentMonth(value);
  };

  //Stripe Block
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      await post('/api/v1/transactions', {
        paymentMethodId: paymentMethod.id,
        rentYear,
        rentMonth
      });
      await history.push('/dashboard');
    } catch(err) {
      console.log(err);
    }
    
  };

  return (
    <div className={styles.BackgroundPayment}>
      <form className={styles.Payment} onSubmit={handleSubmit}>
        <DateDropdowns
          onRentYearChange={onRentYearChange}
          onRentMonthChange={onRentMonthChange}/>
        <CardElement options={cardOptions}/>
        <button className={styles.button} >Submit</button>
      </form>
    </div>
   
  );
}

export default Payment;
