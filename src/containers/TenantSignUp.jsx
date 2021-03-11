import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TenantSignUpForm from '../components/tenantSignUpForm/TenantSignUpForm';
import { signup } from '../services/auth.js';
import { getAllOwners } from '../services/owners';

function TenantSignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rent, setRent] = useState('');
  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState('1');
  const history = useHistory();

  useEffect(() => {
    getAllOwners()
      .then(owners => {
        setOwners(owners);
      });
  }, []);

  const onOwnerChange = (value) => {
    setSelectedOwner(value);
  }

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

  const signUp = (event) => {
    event.preventDefault();
    signup(fullName, rent, selectedOwner, email, password)
    history.push('/dashboard');
  };

  return (
    <div>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <p>This is the SIGN UP PAGE</p>
      <hr />
      <TenantSignUpForm
        owners={owners}
        onOwnerChange={onOwnerChange}
        fullName={fullName}
        email={email}
        password={password}
        rent={rent}
        signUp={signUp}
        onChangeFullName={onChangeFullName}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangeRent={onChangeRent} />
    </div>
  );
}

export default TenantSignUp;
