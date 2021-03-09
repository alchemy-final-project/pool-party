import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TenantLoginForm from '../components/tenantLoginForm/TenantLoginForm';
import Logo from '../components/logo/Logo';
import { loginPost } from '../services/auth.js';

function TenantLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const login = (event) => {
    event.preventDefault();
    //Change this to provide the email/password to the backend route 
    console.log('login clicked');
    loginPost(email, password);
  };

  return (
    <div>
      <Logo />
      <TenantLoginForm
        email={email}
        password={password}
        login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword} />
      <Link to="/tenantSignUp">Need to signup? Click here.</Link>
    </div>
  );
}

export default TenantLogin;
