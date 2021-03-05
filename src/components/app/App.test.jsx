import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IQLH1AlZQgGODSJBkoELcpjSB9liGgfLpot9mWQER1Cv9RCBpLnvhdrDPORukS3YQoeQ4OHq04EC95pX1GrnAHY00rW9sayk4');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <Elements stripe={stripePromise}>
        <App />
      </Elements>);
    expect(asFragment()).toMatchSnapshot();
  });
});
