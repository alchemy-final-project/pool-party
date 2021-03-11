import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreditCardEntry from '../components/cardElement/CreditCardEntry';
import DateDropdowns from '../components/dateDropdowns/DateDropdowns';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { post } from '../services/request';
import styles from './Payment.css';

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
    <div className={styles.Payment}>
      <h1>Entry Credit Card Here to Pay into the Party</h1>

      <p>Need to have a get call to get the amount</p>
      <p>/ Add the amount with a future get</p>

      <DateDropdowns
        onRentYearChange={onRentYearChange}
        onRentMonthChange={onRentMonthChange} />

      <CreditCardEntry handleSubmit={handleSubmit} />
    </div>
  );
}

export default Payment;
