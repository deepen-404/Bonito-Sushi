import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="menu__reviews" id="menu__reviews">
      <div className="button__container">
        <button className="btn">Write a Review</button>
      </div>
      <div className="reviews-container">
        <div className="reviews">
          <h4>Guest User</h4>
          <h5>
            <b>3/23/2301</b>
          </h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="reviews">
          <h4>Guest User</h4>
          <h5>
            <b>3/23/2301</b>
          </h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="reviews">
          <h4>Guest User</h4>
          <h5>
            <b>3/23/2301</b>
          </h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
