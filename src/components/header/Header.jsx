import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {

  return (
    <div className="header">
      <h1>POOL PARTY + Navigation</h1>
      <img className="logo" src="" alt="" />
      <ul className="header_links" >
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link>Owner Sign Up</Link></li>
      </ul>
    </div>
  );
}

export default Header;
