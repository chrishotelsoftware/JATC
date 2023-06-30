import React, { useState } from "react";
import "./Herosection.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const HeroSection = () => {
 

  return (
    <div className="hero-section">
      <div className="bg-col">
     <div className="hstext">
              <p className="hero_t2">
                SoftWear Robotics<img className="tagimg" src="logo.png"></img>{" "}
              </p>
              <p className="hero_t1">(Making wearable robotics a reality)</p>
              <p className="hero_t3">
                State-of-art devices by IIT Delhi and DRDO Labs
              </p>
              <Link to="portfolio">
                <button className="hero_btn">See Our Projects</button>
              </Link>
            </div>
        <div className="carousel-container">
        {/* <img className="tagimg" src="iitlogo.png"></img> */}
               <Carousel className="car">
                <Carousel.Item interval={500}>
                  <img   src="IIT-Delhi.jpg" className="img-thumbnail" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                  <img   src="p1.png" className="img-thumbnail" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                  <img   src="p2.png" className="img-thumbnail" alt="Second slide" />
                </Carousel.Item>
              </Carousel> 
            </div>
      </div>

      <div className="notification-box">
        <h3>Please lookout here for lab events and activities</h3>
        <marquee behavior="scroll" direction="up">
          <p>Scrolling update 1</p>
          <p>Scrolling update 2</p>
          <p>Scrolling update 3</p>
          <p>Scrolling update 4</p>
          <p>Scrolling update 5</p>
          <p>Scrolling update 6</p>
          <p>Scrolling update 7</p>
          <p>Scrolling update 8</p>
          <p>Scrolling update 9</p>
          <p>Scrolling update 10</p>
          

          <div>
          
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default HeroSection;
