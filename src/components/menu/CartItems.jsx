import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./CartItems.css";

const CartItems = () => {
  const { addToCart, removeFromCart, filtered, cartItems } =
    useContext(ShopContext);
  console.log(cartItems);
  console.log(filtered);

  // Check if `filtered` is falsy first
  if (!filtered) {
    console.log("UNDEFINED FOUND IN FILTERED IN CART-ITEMS");
    return null;
  }

  const names = filtered.map((item) => item.name);

  console.log(names);
  const values = names.map((name) => cartItems[name]);
  console.log(values);

  return (
    <div className="Cart-items__container">
      <div className="item-name__container">
        {names.map((name, index) => (
          <div className="cart-item-names" key={index}>
            {name}
            {names.length > 0 && (
              <div className="count-handler">
                <button onClick={() => removeFromCart(name)}>-</button>
                <input value={cartItems[name]} />{" "}
                {/* Display the value from cartItems */}
                <button onClick={() => addToCart(name)}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
