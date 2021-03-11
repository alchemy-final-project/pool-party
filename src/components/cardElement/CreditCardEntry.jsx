import React from 'react';
import PropTypes from 'prop-types';
import {
  CardElement
} from '@stripe/react-stripe-js';
import styles from './CreditCardEntry.css';


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


function CreditCardEntry({ handleSubmit }) {

  return (
    <div>
      <fieldset className={styles.FormGroup}>
        <form className={styles.FormRow} onSubmit={handleSubmit}>
          <CardElement options={cardOptions}/>
          <button>Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

CreditCardEntry.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default CreditCardEntry;
