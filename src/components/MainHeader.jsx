import React from "react";
import { Link } from "react-router-dom";

import "../pages/home/home.css";
// import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#1 Best Sushi in Cijeruk</h4>
          <h1>Enjoy Our Fresh & Delicious Sushi</h1>
          <p>Welcome to Sushi World. You will love our food.</p>
          <Link to="./plans" className="btn lg">
            Explore Our Menu
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
