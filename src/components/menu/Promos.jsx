import React from "react";
import { GoDotFill } from "react-icons/go";
import "./Promos.css";
const Promos = () => {
  return (
    <div className="main-menu__container">
      <div className="menu__promos" id="menu__promos">
        <h3>Vouchers</h3>
        <div className="icAndOffer">
          <GoDotFill className="icon" />
          <p>NIEUWE25 - 25 % Discount</p>
        </div>
      </div>
      <div className="menu__promos" id="menu__promos">
        <h3>Vouchers</h3>
        <div className="icAndOffer">
          <GoDotFill className="icon" />
          <p>NIEUWE25 - 25 % Discount</p>
        </div>
      </div>
      <div className="menu__promos" id="menu__promos">
        <h3>Vouchers</h3>
        <div className="icAndOffer">
          <GoDotFill className="icon" />
          <p>NIEUWE25 - 25 % Discount</p>
        </div>
      </div>
    </div>
  );
};

export default Promos;
