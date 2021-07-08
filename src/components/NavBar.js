import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/">
          <div className="nav_link">
            Item Watches
          </div>
        </Link>
        <Link to="/blog">
          <div className="nav_link">
            Blog
          </div>
        </Link>
        <Link to="/faq">
          <div className="nav_link">
            FAQ
          </div>
        </Link>
        <Link to="/contact">
          <div className="nav_link">
            Contact
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;