import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav_link">
        <Link to="/">
          Home
        </Link>
      </div>
      <div className="nav_link">
        <Link to="/blog">
          Blog
        </Link>
      </div>
      <div className="nav_link">
        <Link to="/watches">
          Item Watches
        </Link>
      </div>
      <div className="nav_link">
        <Link to="/faq">
          FAQ
        </Link>
      </div>
      <div className="nav_link">
        <Link to="/contact">
          Contact
        </Link>
      </div>
      <div className="nav_sign-in">
        <Link to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default NavBar;