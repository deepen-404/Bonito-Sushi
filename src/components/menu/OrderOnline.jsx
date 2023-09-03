import React from "react";
import "./OrderOnline.css";
import MenuClassifer from "./MenuClassifer";
import SingleItem from "./SingleItem";
const OrderOnline = () => {
  return (
    <div className="order__online-container" id="online__order">
      <MenuClassifer />
      <SingleItem/>
    </div>
  );
};

export default OrderOnline;
