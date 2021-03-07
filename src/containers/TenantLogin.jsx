import React, { useState } from 'react';
import TenantLoginForm from '../components/tenantLoginForm/TenantLoginForm';

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
  };

  console.log(email, password);
  return (
    <div>
      <TenantLoginForm
        email={email}
        password={password} 
        login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}/>
    </div>
  );
}

export default TenantLogin;
