import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">My App</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;
