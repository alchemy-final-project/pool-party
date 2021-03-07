import React from 'react';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OwnerSignUp from '../../containers/OwnerSignUp';
import TenantLogin from '../../containers/TenantLogin';
import TenantSignUp from '../../containers/TenantSignUp';


function App() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
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
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={TenantLogin} />
          <Route exact path="/tenantSignup" component={TenantSignUp} />
          <Route exact path="/ownerSignup" component={OwnerSignUp} />
        </Switch>
      </Router>
      <br/>
      <hr/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button>Submit</button>
      </form>
      
    </>
  );
}
export default App;
