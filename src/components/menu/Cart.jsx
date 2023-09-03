import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./Cart.css";
import CartItems from "./CartItems";
import menuData from "../../data/menuData";

const Cart = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  console.log(cartItems);
  const [isCartVisible, setIsCartVisible] = useState(true);

  let itemQuantities = {};
  menuData.forEach((section) => {
    section.items.forEach((item) => {
      itemQuantities[item.name] = cartItems[item.name] || 0;
    });
  });

  const itemQuantitiesArray = Object.entries(itemQuantities).map(
    ([itemName, quantity]) => quantity
  );
  console.log(itemQuantitiesArray);
  const hasItemsInCart =
    Object.values(itemQuantities).filter((quantity) => quantity > 0).length > 0;
  console.log(itemQuantitiesArray);
  console.log(hasItemsInCart);
  const itemsNumber = itemQuantitiesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const menuPrices = menuData.flatMap((section) =>
    section.items.map((item) => item.price)
  );
  console.log(menuPrices);
  const totalPrice = itemQuantitiesArray.reduce((acc, quantity, index) => {
    if (quantity > 0) {
      const price = parseFloat(menuPrices[index].replace("€", "").trim());
      return acc + quantity * price;
    }
    return acc;
  }, 0);

  console.log(totalPrice);

  console.log(itemsNumber);

  return (
    <div className="cart__container">
      <div className={` ${isCartVisible ? "visible" : "hidden"}`}>
        <div className="back-button">
          <button>Back</button>
        </div>
        <div className="line-container"></div>
        <div className="items-container">
          <p className="items-number">Cart Items :({itemsNumber} items) </p>
          <div className="cart-items">
            <CartItems />
          </div>
          <div className="total-price">
            <p>
              Total <span>€{totalPrice}</span>
            </p>
          </div>
          <button className="order-button">PLACE ORDER</button>
        </div>
      </div>
      <div className="mobile-toggle__button">
        <button onClick={() => setIsCartVisible(!isCartVisible)}>
          {isCartVisible ? "Hide my Cart" : "Show my Cart"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
