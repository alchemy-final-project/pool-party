import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TenantLoginForm.css';

function TenantLoginForm({
  email,
  password,
  login,
  onChangeEmail,
  onChangePassword
}) {
  return (
    <>
      <div className={styles.TenantLoginForm}>
        {/* <h1>Login</h1> */}
        <form
          onSubmit={login}>

          <label>Email</label>
          <input
            type="plain/text"
            placeholder="Enter email as username"
            value={email}
            onChange={(event) => { onChangeEmail(event.target.value); }}
            required></input>

          <label>Password</label>
          <input
            type="password"
            placeholder="Type Password"
            value={password}
            onChange={(event) => { onChangePassword(event.target.value); }}
            required></input>

          <button>Log In</button>
          <Link to="/tenantSignUp" style={{ fontFamily: "Bebas Neue", color: "rgb(251, 255, 248)", justifyContent: "center" }}>Need to signup? Click here</Link>
        </form>
      </div>
    </>
  );
}

TenantLoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default TenantLoginForm;
