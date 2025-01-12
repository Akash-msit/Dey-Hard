import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
    const toggleNavbar = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      };

  return (
    <nav className="navbar">
      <div className="logo">DEY HARDWARE</div>
      <div className="hamburger" onClick={toggleNavbar}>☰</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
