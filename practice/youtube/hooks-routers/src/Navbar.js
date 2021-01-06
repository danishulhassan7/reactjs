import React from 'react';


function Navbar() {
  return (
    <div>
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">My App</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;
