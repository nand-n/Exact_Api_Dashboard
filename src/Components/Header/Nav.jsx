import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-500 p-3 fixed top-0 z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/" className="text-white mr-4">
              Home
            </Link>
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>
          <div className="flex">
            <Link to="/login" className="text-white mr-4">
              Login
            </Link>
            <Link to="/signup" className="text-white">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;