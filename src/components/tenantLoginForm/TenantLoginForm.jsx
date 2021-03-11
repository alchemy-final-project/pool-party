import React from 'react';
import PropTypes from 'prop-types';
import styles from './TenantLoginForm.css';
// import water from '../../images/water.jpg';

function TenantLoginForm({
  email,
  password,
  login,
  onChangeEmail,
  onChangePassword
}) {
  return (
    <>
      {/* <img src={water} type='image' alt="water reflection" /> */}
      <div className={styles.TenantLoginForm}>
        <h1>Login</h1>
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
