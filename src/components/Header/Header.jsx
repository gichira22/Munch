import React from "react";
import "./Header.css";
import { BiRightArrow } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Welcome to Munch Palace</h1>
        <h2>Home of delicacies</h2>
        <p>
          Order your favorite meals from here. We have a variety of meals in our
          menu. Order from the best and witness a taste with difference. It
          takes like never before and will always be.
        </p>

        <button>View Menu</button>
        <BiRightArrow />
      </div>
    </div>
  );
};

export default Header;
