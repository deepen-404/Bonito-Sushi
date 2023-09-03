import React from "react";
import "./MiniNavBar.css";

const Mininav = ({ onNavLinkClick }) => {
  return (
    <div className="mini-nav__container">
      <ul className="links__container">
        <li>
          <button onClick={() => onNavLinkClick("order__online")}>
            <p> ORDER ONLINE </p>
          </button>
        </li>
        <li>
          <button onClick={() => onNavLinkClick("reviews")}>
            <p> REVIEWS </p>
          </button>
        </li>
        <li>
          <button onClick={() => onNavLinkClick("photos")}>
            <p> PHOTOS </p>
          </button>
        </li>
        <li>
          <button onClick={() => onNavLinkClick("promos")}>
            <p> PROMOS </p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Mininav;
