import React from "react";
import "./about.css";
// images
import Image1 from "../../images/about-1.jpg";
import Image2 from "../../images/about-2.jpg";
import Image3 from "../../images/about-3.jpg";
import Image4 from "../../images/about-4.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__container-left">
          <img className="large-img one" src={Image1} alt="" />
          <img className="small-img one" src={Image2} alt="" />
          <img className="small-img two" src={Image3} alt="" />
          <img className="large-img two" src={Image4} alt="" />
        </div>
        <div className="about__container-right">
          <h4 className="about__heading">About Us</h4>
          <h1>Welcome to Bonito Sushi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sunt
            ipsam earum ratione vel corrupti perferendis illum recusandae
            reprehenderit non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem odit blanditiis at repudiandae omnis porro, ut
            repellat, similique, totam sunt deserunt pariatur iusto iure a.
          </p>
          <div className="about__details">
            <div className="about__details-left">
              <div>
                <h1>7</h1>
              </div>
              <div>
                <p>Years of </p>
                <span>EXPERIENCE</span>
              </div>
            </div>
            <div className="about__details-right">
              <div>
                <h1>10</h1>
              </div>
              <div>
                <p>Popular </p>
                <span>MASTER CHEFS</span>
              </div>
            </div>
          </div>
          <button className="btn lg">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default About;
