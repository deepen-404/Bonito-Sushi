import { createContext, useState } from "react";
import menuData from "../data/menuData";

const getDefaultCart = () => {
  // console.log(menuData);
  if (!menuData) {
    return console.log("FOUND AN UNDEFINED VALUE IN SHOP-CONTEXT");
  }
  const initialCartItems = {};
  menuData.forEach((section) => {
    section.items.forEach((item) => {
      initialCartItems[item.name] = 0;
    });
  });

  return initialCartItems;
};
// const getDefaultCart = (menuData) => {
//     console.log(menuData);
//   if (!menuData) {
//     return console.log("FOUND AN UNDEFINED VALUE IN SHOP-CONTEXT");
//   }
//   const initialCartItems = {};
//   menuData.forEach((section) => {
//     section.items.forEach((item) => {
//       initialCartItems[item.name] = 0;
//     });
//   });

//   return initialCartItems;
// };

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart(menuData));
  const [filtered, setFiltered] = useState([]);
  //   console.log(cartItems);
  //   console.log("BREAK HERE");
  //   console.log(getDefaultCart(menuData));
  const addToCart = (itemName) => {
    setCartItems((prev) => {
      return { ...prev, [itemName]: prev[itemName] + 1 };
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((prev) => {
      return prev[itemName] > 0
        ? { ...prev, [itemName]: prev[itemName] - 1 }
        : prev;
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart, filtered, setFiltered};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
