import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <span className='logo_text'>Soft Wear</span>
        <img src="./logo.png" alt="Logo" className="logo-img" />
        
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Publications">Publications</Link>
        </li>
         {/* <li>
          <Link to="/Team">Team</Link>
        </li> */}
        <li>
          <Link to="/Contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
