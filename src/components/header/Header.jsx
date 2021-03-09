import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <div className="header">
      <h1>POOL PARTY + Header</h1>
      <img className="logo" src="" alt="" />
      <ul className="header_links" >
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/ownerSignup">Owner Sign Up</Link></li>
      </ul>
    </div>
  );
}

export default Header;
