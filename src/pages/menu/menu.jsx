import React, { useState } from "react";
import Mininav from "../../components/menu/MiniNavBar";
import Cart from "../../components/menu/Cart"; // Import the Cart component
import OrderOnline from "../../components/menu/OrderOnline";
import Reviews from "../../components/menu/Reviews";
import Photos from "../../components/menu/Photos";
import Promos from "../../components/menu/Promos";
import MenuClassifer from "../../components/menu/MenuClassifer";
import SingleItem from "../../components/menu/SingleItem";
import menuData from "../../data/menuData";
import "./menu.css";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const [filteredItems, setFilteredItems] = useState([]); // State to store filtered items

  // Function to update filtered items when called from SingleItem component
  const handleFilteredItemsChange = (filteredItems) => {
    setFilteredItems(filteredItems);
  };
  return (
    <div className="container menu__container">
      <div className="menu__container-left">
        <div className="menu__nav-bar">
          <Mininav onNavLinkClick={handleNavLinkClick} />
          {activeSection === "order__online" && <OrderOnline />}
          {activeSection === "reviews" && <Reviews />}
          {activeSection === "photos" && <Photos />}
          {activeSection === "promos" && <Promos />}
        </div>
        {activeSection === "order__online" && (
          <div className="menu__nav-bar-below">
            <div className="menu-classifer">
              <MenuClassifer
                menuData={menuData}
                selectedSection={selectedSection}
                onSectionClick={handleSectionClick}
              />
            </div>
            <div className="menu-classifier-details">
              <SingleItem
                menuData={menuData}
                selectedSection={selectedSection}
                handleFilteredItemsChange={handleFilteredItemsChange}
              />
            </div>
            <div className="menu__container-right">
              <Cart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
