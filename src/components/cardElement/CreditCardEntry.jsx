import React from 'react';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

function CreditCardEntry() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    fetch('http://localhost:7890/api/v1/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ paymentMethod: paymentMethod.id })
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreditCardEntry;
