import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OwnerSignUp from '../../containers/OwnerSignUp';
import TenantLogin from '../../containers/TenantLogin';
import TenantSignUp from '../../containers/TenantSignUp';
import Payment from '../../containers/Payment';
import Dashboard from '../../containers/Dashboard';
import Header from '../header/Header';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={TenantLogin} />
          <Route exact path="/tenantSignup" component={TenantSignUp} />
          <Route exact path="/ownerSignup" component={OwnerSignUp} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
