import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OwnerSignUp from '../../containers/OwnerSignUp';
import TenantLogin from '../../containers/TenantLogin';
import TenantSignUp from '../../containers/TenantSignUp';
import Payment from '../../containers/Payment';
import Dashboard from '../../containers/Dashboard';
import AboutUs from '../../containers/AboutUs';
import Navbar from '../header/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={TenantLogin} />
          <Route exact path="/tenantSignup" component={TenantSignUp} />
          <Route exact path="/ownerSignup" component={OwnerSignUp} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/aboutUs" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
