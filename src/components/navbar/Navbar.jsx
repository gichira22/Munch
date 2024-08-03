import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Menu</li>
        <li>Offers</li>
        <li>Orders</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <FaSearch />
        <div className="navbar-search-icon">
          <FaShoppingCart />
          <div className="dot"></div>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
