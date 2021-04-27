import React from 'react';
import { Link } from 'react-router-dom';

const UserAccess = () => {
  return (
    <div className="user_access">
      <Link to="/signin">
        Sign In
      </Link>
      {' / '}
      <Link to="/register">
        Register
      </Link>
    </div>
  )
}

export default UserAccess;