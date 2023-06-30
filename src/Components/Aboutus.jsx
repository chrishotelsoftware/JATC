import React, { useState } from "react";
import "./Aboutus.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div className="Aboutus_pg">
      <div className="head_about">
        <Row>
          <Col>
            <h1 className="hat1">
              Empowering Individuals Through Wearable Robotics Innovation
            </h1>
          </Col>
          <Col>
            <img className="hat1_img" src="logo.png"></img>
          </Col>
        </Row>
      </div>
      <div className="abt_content">
        <h1 className="abt_cont_h">About SoftWear Robotics</h1>
        <p className="abt_cont_ab">
          At SoftWear Robotics, our mission is to push the boundaries of
          wearable robotics and develop cutting-edge wearable devices that
          augment and assist individual capabilities. We strive to create
          products that are lightweight, biologically compliant, and dynamically
          transparent to the user. Our team of dedicated professionals utilizes
          state-of-the-art equipment to design, test, and validate our
          innovative products at every step of the fabrication process.
        </p>
      </div>
      <div className="invo">
        <h1 className="abt_cont_h">Innovation at the Core</h1>
        <Row>
          <Col>
            <img className="hat1_img" src="abth.png"></img>
          </Col>
          <Col>
            <p className="abt_cont_ab">
              We believe in the power of innovation and its potential to
              revolutionize the way we interact with technology. By leveraging
              advanced materials, intelligent design principles, and
              human-centered approaches, we aim to develop wearable devices that
              seamlessly integrate with the human body and enhance human
              capabilities. Our focus on research and development enables us to
              stay at the forefront of wearable robotics technology and create
              products that push the boundaries of what is possible.
            </p>
          </Col>
        </Row>
      </div>
      <div className="memb">
        <h1 className="abt_cont_h">Multidisciplinary and Dynamic Team</h1>
        <p className="abt_cont_ab">
          At SoftWear Robotics, we have assembled a multidisciplinary and
          dynamic team of experts from various fields. Our team consists of
          talented engineers, designers, researchers, and technicians who
          collaborate closely to bring our vision to life. With diverse
          backgrounds and a shared passion for innovation, our team members
          bring unique perspectives and expertise to every project.
        </p>
        <Link to="/Team">
          <button className="hero_btn">Explore Our Team</button>
        </Link>
      </div>
      <div className="car_ab">
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              src="IIT-Delhi.jpg"
              className="img-thumbnail"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img src="p1.png" className="img-thumbnail" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img src="p2.png" className="img-thumbnail" alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="sft">
        <Row>
          <Col className="sft_c">
            <h1 className="sft_h">Simulate</h1>
            <p>
              Simulation plays a crucial role in our development process. We
              employ advanced simulation software and tools to model and
              optimize the design of our wearable devices. Through simulations,
              we can accurately predict the performance, behavior, and
              interactions of our products with the human body. This enables us
              to identify potential design improvements, refine ergonomics, and
              optimize functionality before moving on to the fabrication stage.
              Simulation allows us to iterate quickly, saving time and resources
              while ensuring that our designs meet the highest standards.
            </p>
          </Col>
          <Col className="sft_c">
            <h1 className="sft_h">Fabricate</h1>
            <p>
              Once the design has been simulated and optimized, we move on to
              the fabrication stage. Our team utilizes state-of-the-art
              equipment and cutting-edge manufacturing techniques to bring our
              product prototypes to life. We work with a variety of materials,
              carefully selecting the ones that best meet the requirements of
              each wearable device. Fabrication involves precision engineering,
              3D printing, and other advanced manufacturing processes to create
              the physical components of our products. Our skilled technicians
              and engineers work meticulously to ensure the highest quality and
              precision during the fabrication process.
            </p>
          </Col>
          <Col className="sft_c">
            <h1 className="sft_h">Test</h1>
            <p>
              Testing is a critical step in the development of our wearable
              devices. We subject our prototypes to comprehensive evaluations to
              validate their performance, durability, and safety. Our testing
              procedures are designed to assess various aspects, including
              functionality, reliability, comfort, and user experience. We
              conduct both controlled laboratory tests and real-world scenarios
              to simulate different environments and conditions. By thoroughly
              testing our products, we can identify any potential issues, make
              necessary refinements, and ensure that our wearable devices meet
              the stringent quality standards we set. Testing also provides
              valuable insights for further improvement and innovation.
            </p>
          </Col>
        </Row>
      </div>
      <div className="cont_abt">
        <h1 className="abt_cont_h">Join Our Team</h1>
        <p className="abt_cont_ab">
          If you are passionate about wearable robotics and want to be part of a
          team that is revolutionizing the industry, we invite you to join us at
          SoftWear Robotics. We value creativity, collaboration, and a
          commitment to excellence. Whether you are an experienced professional
          or a fresh graduate, we offer exciting opportunities for growth and
          development. If you are interested in joining our team, please contact
          us and submit your resume. We look forward to hearing from you!
        </p>
        <Link to="/Contactus">
          <button className="hero_btn">Contact us</button>
        </Link>

       
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutus;
