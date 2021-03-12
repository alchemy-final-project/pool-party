import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TenantLoginForm from '../components/tenantLoginForm/TenantLoginForm';
import { loginPost } from '../services/auth.js';

function TenantLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const login = (event) => {
    event.preventDefault();
    loginPost(email, password)
      .then(() => history.push('./dashboard'));
  };

  return (
    <div>
      <TenantLoginForm
        email={email}
        password={password}
        login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword} />
    </div>
  );
}

export default TenantLogin;
