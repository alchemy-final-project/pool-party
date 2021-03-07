import React from 'react';
import styles from './TenantLoginForm.css';

function TenantLoginForm() {
  return (
    <div>
      <p>Sample Text</p>
      <form className={styles.loginForm}>
        <label>Email</label>
        <input 
          type="plain/text"
          placeholder="Enter email as username"
          required>
        </input>
        <label>Password</label>
        <input 
          type="password"
          placeholder="Type Password"
          required></input>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default TenantLoginForm;
