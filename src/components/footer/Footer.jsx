/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.css';
// import footerIcon from '../../../public/assets/PoolPartyIcon.png';

export default function Footer() {

  return (
    <nav className={styles.footerContainer}>
      {/* <img className={styles.footerIcon} src={footerIcon}></img> */}
      <ul className={styles.footerMenu}>
        <li className={styles.footerItem}>
          <NavLink className="link" to="/">Privacy Policy</NavLink>
        </li>
        <li className={styles.footerItem}>
          <NavLink className="link" to="/">Terms & Conditions</NavLink>
        </li>
        <li className={styles.footerItem}>
          <NavLink className="link" to="/aboutUs">About Us</NavLink>
        </li>
        <li className={styles.footerItem}>
          <NavLink className="link" to="/tenantSignup">Sign Up</NavLink>
        </li>
        <li className={styles.footerItem}>
          © POOLPARTY 2021
          </li>
      </ul>
    </nav>
  );
}
