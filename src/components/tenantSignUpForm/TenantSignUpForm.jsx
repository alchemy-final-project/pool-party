import React from 'react';
import PropTypes from 'prop-types';
import OwnerDropDown from '../ownerDropDown/OwnerDropDown';
import styles from './TenantSignUpForm.css';

function TenantSignUpForm({
  owners,
  onOwnerChange,
  fullName,
  email,
  password,
  rent,
  signUp,
  onChangeFullName,
  onChangeEmail,
  onChangePassword,
  onChangeRent
}) {

  return (
    <div>
      <form
        onSubmit={signUp}
        className={styles.loginForm}>
        <OwnerDropDown
          owners={owners}
          onOwnerChange={onOwnerChange} />
        <label>Name</label>
        <input
          type="plain/text"
          placeholder="Enter First and Last Name"
          value={fullName}
          onChange={(event) => { onChangeFullName(event.target.value); }}
          required>
        </input>
        <label>Email</label>
        <input
          type="plain/text"
          placeholder="Enter email as username"
          value={email}
          onChange={(event) => { onChangeEmail(event.target.value); }}
          required>
        </input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Type Password"
          value={password}
          onChange={(event) => { onChangePassword(event.target.value); }}
          required></input>
        <label>Rent</label>
        <input
          type="plain/text"
          placeholder="Enter Rent in Dollars Here"
          value={rent}
          onChange={(event) => { onChangeRent(event.target.value); }}
          required></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

TenantSignUpForm.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  rent: PropTypes.string,
  signUp: PropTypes.func.isRequired,
  onChangeFullName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRent: PropTypes.func.isRequired,
};

export default TenantSignUpForm;
