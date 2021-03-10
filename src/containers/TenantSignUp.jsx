import React, { useState } from 'react';
import TenantSignUpForm from '../components/tenantSignUpForm/TenantSignUpForm';
import { signup } from '../services/auth.js';

function TenantSignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rent, setRent] = useState('');
  const ownerId = 2;

  const onChangeFullName = (value) => {
    setFullName(value);
  };

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const onChangeRent = (value) => {
    setRent(value);
  };

  const login = (event) => {
    event.preventDefault();

    console.log('login clicked');

    signup(fullName, rent, ownerId, email, password);
  };

  return (
    <div>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <hr />
      <TenantSignUpForm
        fullName={fullName}
        email={email}
        password={password}
        rent={rent}
        login={login}
        onChangeFullName={onChangeFullName}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangeRent={onChangeRent} />
    </div>
  );
}

export default TenantSignUp;
