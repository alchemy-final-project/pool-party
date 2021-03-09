import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="" alt="" />
        <ul className="header_links" >
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link>Owner Sign Up</Link></li>
        </ul>
      </div>
    );
  }
}
