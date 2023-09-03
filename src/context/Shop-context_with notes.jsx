// import React, { createContext, useState } from "react";
// import menuData from "../data/menuData";

// export const ShopContext = createContext(null);

// export const ShopContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName) => {
//     setCartItems((prevCartItems) => {
//       if (prevCartItems[itemName]) {
//         return {
//           ...prevCartItems,
//           [itemName]: prevCartItems[itemName] + 1,
//         };
//       } else {
//         return {
//           ...prevCartItems,
//           [itemName]: 1,
//         };
//       }
//     });
//   };

//   const removeFromCart = (itemName) => {
//     setCartItems((prevCartItems) => {
//       const updatedCartItems = { ...prevCartItems };
//       if (updatedCartItems[itemName] > 1) {
//         updatedCartItems[itemName] -= 1;
//       } else {
//         delete updatedCartItems[itemName];
//       }
//       return updatedCartItems;
//     });
//   };

//   const clearCart = () => {
//     setCartItems({});
//   };

//   const getCartTotal = () => {
//     // Calculate the total price based on cart items and their prices
//     const totalPrice = Object.keys(cartItems).reduce((total, itemName) => {
//       const menuItem = menuData.find((item) => item.name === itemName);
//       if (menuItem) {
//         return total + menuItem.price * cartItems[itemName];
//       }
//       return total;
//     }, 0);
//     return totalPrice;
//   };

//   const contextValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     getCartTotal,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
//   );
// };

import { createContext, useState } from "react";
import menuData from "../data/menuData";

// function to return an object with all the key as zero
// where the key is the item name in our case
const getDefaultCart = (menuData) => {
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

// creating a context here

// this is like a store in our application where its gonna
// keep track of states and functions that need to be
// accesssed everywhere in our project
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // here we can begin to create states for our component
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // this state will actually be an object with 8 properties
  // id from the product data or each product id is key here
  // for the state value
  // the key is used to hold how many items with those keys are

  // an funciton to create an empty object to reprsent initial stae of
  // our cartItems

  // this Component will define all of the states and function
  // for our application and then just pass it to the Provider
  // have to wrap the return function our context.provider

  // now lets see what things i want to do with my states
  // this is how we wanna add a item to our cart

  const addToCart = (itemName) => {
    setCartItems((prev) => {
      if (prev === undefined) {
        console.log("PREV IS UNDEFINED");
        return prev;
      }
      return { ...prev, [itemName]: prev[itemName] + 1 };
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((prev) => {
      if (prev === undefined) {
        console.log("PREV IS UNDEFINED");
        return prev;
      }
      return { ...prev, [itemName]: prev[itemName] - 1 };
    });
  };
  // passing thse addtocart and removefrom cart functions to the provider
  // which will make it available thorughout the application
  // this is done by passing a value in the ShopContext.Provider
  // we will require an object for it

  const contextValue = { cartItems, addToCart, removeFromCart };
  // console.log(getDefaultCart())
  // console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
  // props.children makes the component not a self closing component
  // rather it wraps all other component in our project
};
