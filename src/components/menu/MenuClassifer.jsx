import React from "react";
import "./MenuClassifer.css";
const MenuClassifer = ({ menuData, selectedSection, onSectionClick }) => {
  if (!menuData) {
    return console.log("UNDEFINED FOUND IN MENU CLASSIFIER");
  }

  const sections = menuData.map((menuData) => menuData.section);

  return (
    <div className="position-setter">
      <div className="order-online__container">
        <div className="menu__classifier">
          <h4>Menu</h4>
        </div>
        <div className="section__names">
          {sections.map((section, index) => (
            <div className="button__names" key={index}>
              <button
                className={`menu-classifer__container ${
                  section === selectedSection ? "active" : ""
                }`}
                onClick={() => onSectionClick(section)}
              >
                {section}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuClassifer;
