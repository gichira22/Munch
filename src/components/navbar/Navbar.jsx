import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("about us")}
          className={menu === "about us" ? "active" : ""}
        >
          About Us
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("offers")}
          className={menu === "offers" ? "active" : ""}
        >
          Offers
        </li>
        <li
          onClick={() => setMenu("orders")}
          className={menu === "orders" ? "active" : ""}
        >
          Orders
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <FaSearch />
        <div className="navbar-search-icon">
          <FaBasketShopping />
          <div className="dot"></div>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
