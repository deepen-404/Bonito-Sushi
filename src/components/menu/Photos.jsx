import React from "react";
import "./Photos.css";

// photos
import photo1 from "../../images/photo1.jpeg";
import photo2 from "../../images/photo2.jpeg";
import photo3 from "../../images/photo3.jpeg";
import photo4 from "../../images/photo4.jpeg";
import photo5 from "../../images/photo5.jpeg";
import photo6 from "../../images/photo6.jpeg";
const Photos = () => {
  return (
    <div className="menu__photos" id="menu__photos">
      <div className="row__one">
        <img src={photo1} alt="Menu Photo 1" />
        <img src={photo2} alt="Menu Photo 2" />
        <img src={photo3} alt="Menu Photo 3" />
      </div>
      <div className="row__two">
        <img src={photo4} alt="Menu Photo 4" />
        <img src={photo5} alt="Menu Photo 5" />
        <img src={photo6} alt="Menu Photo 6" />
      </div>
    </div>
  );
};

export default Photos;
