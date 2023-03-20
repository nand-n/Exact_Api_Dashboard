import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
     <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/qanda">Q&amp;A</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          {/* Add more links here */}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-400 hover:text-white mr-4 mt-2 sm:mt-0 last:mr-0"
    >
      {children}
    </Link>
  );
}

export default Footer;