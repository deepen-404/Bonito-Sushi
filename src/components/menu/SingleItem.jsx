import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./SingleItem.css";
import { GoDotFill } from "react-icons/go";

const SingleItem = ({ menuData, selectedSection }) => {
  const { addToCart, removeFromCart, cartItems, setFiltered, filtered } =
    useContext(ShopContext);
  console.log(filtered);
  // Define the filterItems function
  const filterItems = () => {
    if (!menuData) {
      return console.log("FOUND AN UNDEFINED VALUE IN SINGLE ITEM");
    }
    const filteredItems = menuData
      .map((section) =>
        section.items.filter((item) => cartItems[item.name] > 0)
      )
      .flat(); // Flatten the array

    // Update the filtered state
    setFiltered(filteredItems);
  };

  // Call filterItems whenever cartItems change
  useEffect(() => {
    filterItems();
  }, [cartItems, setFiltered]);

  console.log(filtered);
  if (!menuData) {
    return console.log("FOUND AN UNDEFINED VALUE IN SINGLE ITEM");
  }
  const sections = menuData.map((menuData) => menuData.section);

  let cartItemAmount = 0;

  return (
    <div className="single-item__container">
      <h4>Menu Items</h4>
      {sections.map((section, sectionIndex) => (
        <div
          className="names-and-items__container"
          key={sectionIndex}
          style={{
            display: selectedSection
              ? selectedSection === section
                ? "block"
                : "none"
              : "block",
          }}
        >
          <div className="section__name">
            <p>{section}</p>
          </div>
          <div className="item__details">
            <div className="items__name">
              {menuData[sectionIndex].items.map((item, itemIndex) => (
                <div className="item-container" key={itemIndex}>
                  <div className="item-info">
                    <div className="nameAndIcon">
                      <GoDotFill className="icon-single-item" />
                      <p className="item-name">{item.name}</p>
                    </div>
                    <p className="item-price">{item.price}</p>
                    {(cartItemAmount = cartItems[item.name])}
                    {cartItemAmount > 0 && (
                      <>
                        <p className="item-quantity">
                          On Cart : {cartItemAmount}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="button-container">
                    <button
                      className="add__button"
                      onClick={() => addToCart(item.name)}
                    >
                      +
                    </button>
                    {/* <button
                      className="subtract__button"
                      onClick={() => removeFromCart(item.name)}
                    >
                      -
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleItem;
