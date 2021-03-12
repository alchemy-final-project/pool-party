import React from 'react';
import PropTypes from 'prop-types';
import {
  CardElement
} from '@stripe/react-stripe-js';
import '../cardElement/CreditCardEntry.css';
import styles from '../../containers/Payment.css';
import DateDropdowns from '../dateDropdowns/DateDropdowns';

// const cardOptions = {
//   iconStyle: 'solid',
//   hidePostalCode: false,
//   style: {
//     base: {
//       iconColor: 'rgb(240, 57, 122)',
//       color: 'rgb(240, 57, 122)',
//       fontSize: '16px',
//       fontFamily: '"Open Sans", sans-serif',
//       fontSmoothing: 'antialiased',
//       '::placeholder': {
//         color: '#CFD7DF'
//       }
//     },
//     invalid: {
//       color: '#e5424d',
//       ':focus': {
//         color: '#303238'
//       }
//     }
//   }
// };


function CreditCardEntry({ handleSubmit }) {

  return (
    <div className={styles.FormGroup}>
      {/* <form id="" card onSubmit={handleSubmit}>
        <DateDropdowns
          onRentYearChange={onRentYearChange}
          onRentMonthChange={onRentMonthChange}/>
        <CardElement options={cardOptions}/>
        <button className={styles.button} >Submit</button>
      </form> */}
    </div>
  );
}

CreditCardEntry.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default CreditCardEntry;
