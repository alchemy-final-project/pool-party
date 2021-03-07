import React, { useState } from 'react';
import TenantSignUpForm from '../components/tenantSignUpForm/TenantSignUpForm';


function TenantSignUp() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rent, setRent] = useState('');

  const onChangeFullName = (value) => {
    setFullName(value);
  };

  const onChangeAddress = (value) => {
    setAddress(value);
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
    //Change this to provide the email/password/rent/etc to the backend route 
    console.log('login clicked');
    //On success this needs to send user to dashboard
  };

  console.log(fullName, address, email, rent);
  return (
    <div>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <hr/>
      <TenantSignUpForm 
        fullName={fullName}
        address={address}
        email={email}
        password={password}
        rent={rent} 
        login={login}
        onChangeFullName={onChangeFullName}
        onChangeAddress={onChangeAddress}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangeRent={onChangeRent}/>
    </div>
  );
}

export default TenantSignUp;
