import React from 'react';
import SignIn from './SignIn';

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav_link">
        <a href="">Home</a>
      </div>
      <div className="nav_link">
        <a href="">Item Watches</a>
      </div>
      <div className="nav_link">
        <a href="">FAQ</a>
      </div>
      <div className="nav_link">
        <a href="">Contact</a>
      </div>
      <SignIn />
    </div>
  )
}

export default NavBar;