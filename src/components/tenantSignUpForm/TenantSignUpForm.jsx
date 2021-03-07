import React from 'react';
import PropTypes from 'prop-types';
import styles from './TenantSignUpForm.css';

function TenantSignUpForm({ 
  fullName,
  address,
  email,
  password,
  rent,
  login,
  onChangeFullName,
  onChangeAddress,
  onChangeEmail,
  onChangePassword,
  onChangeRent
}) {
  return (
    <div>
      <form 
        onSubmit={login}
        className={styles.loginForm}>
        <label>Find Your Property</label>
        <select>
          {/* Change this to populate based on endpoint querying accts */}
          <option value="acct1">Account 1</option>
          <option value="acct2">Account 2</option>
          <option value="acct3">Account 3</option>
        </select>
        <label>Name</label>
        <input 
          type="plain/text"
          placeholder="Enter First and Last Name"
          value={fullName}
          onChange={(event) => {onChangeFullName(event.target.value);}}
          required>
        </input>
        <label>Full Apartment Address</label>
        <input 
          type="plain/text"
          placeholder="Enter full address"
          value={address}
          onChange={(event) => {onChangeAddress(event.target.value);}}
          required>
        </input>
        <label>Email</label>
        <input 
          type="plain/text"
          placeholder="Enter email as username"
          value={email}
          onChange={(event) => {onChangeEmail(event.target.value);}}
          required>
        </input>
        <label>Password</label>
        <input 
          type="password"
          placeholder="Type Password"
          value={password}
          onChange={(event) => {onChangePassword(event.target.value);}}
          required></input>
        <label>Rent</label>
        <input 
          type="plain/text"
          placeholder="Enter Rent in Dollars Here"
          value={rent}
          onChange={(event) => {onChangeRent(event.target.value);}}
          required></input>
        <button>Log In</button>
      </form>
    </div>
  );
}

TenantSignUpForm.propTypes = {
  fullName: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  rent: PropTypes.string,
  login: PropTypes.func.isRequired,
  onChangeFullName: PropTypes.func.isRequired,
  onChangeAddress: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRent: PropTypes.func.isRequired,
};

export default TenantSignUpForm;
