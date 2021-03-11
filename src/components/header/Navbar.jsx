/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../header/Navbar.css';

export default function Navbar() {
  return ( 
    <>     
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <NavLink to="/">Pool Party</NavLink>
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/tenantSignup">Sign Up</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

