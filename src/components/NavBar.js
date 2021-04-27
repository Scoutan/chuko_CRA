import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/">
          <div className="nav_link">
            Home
          </div>
        </Link>
        <Link to="/blog">
          <div className="nav_link two">
            Blog
          </div>
        </Link>
        <Link to="/watches">
          <div className="nav_link three">
            Item Watches
          </div>
        </Link>
        <Link to="/faq">
          <div className="nav_link four">
            FAQ
          </div>
        </Link>
        <Link to="/contact">
          <div className="nav_link five">
            Contact
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;