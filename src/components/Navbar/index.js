import React from 'react';
import './index.css';
import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className="nav">
      <a href="/">
        <img className="logo" src={logo} alt="Xcel" />
      </a>
      <div className="navBtnContainer">
        {/* <a className="navBtn" href="/">Pricing and Services</a> */}
        <a className="navBtn" href="/contact">Contact</a>
      </div>
      <div className="navExpand">
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
