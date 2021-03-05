import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import {
  Elements
} from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IQLH1AlZQgGODSJBkoELcpjSB9liGgfLpot9mWQER1Cv9RCBpLnvhdrDPORukS3YQoeQ4OHq04EC95pX1GrnAHY00rW9sayk4');

render(
  
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById('root')
);
