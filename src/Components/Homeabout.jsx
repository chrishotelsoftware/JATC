import React from 'react'
import "./Homeabout.css";
import Carousel from "react-bootstrap/Carousel";
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Homeabout = () => {
  return (
    <div className='habout'>
        <Row>
            <Col>
            <div className='habout_text'>
        <h1 className='ha1'>About us</h1>
        <h3 className='ha2'>Our Mission</h3>
        <p className='ha3'>The goal of SoftWear Robotics is to push the boundaries of wearable robotics and foray into realistic wearable devices that can augment or assist individual capabilities. State-of-the-art equipment are being used to design test and validate the products in each step of the fabrication process. A major aim of such wearable devices is to be light-weight, biologically compliant and dynamically transparent to the user.</p>
        <h3 className='ha2'>Our Team</h3>
        <p className='ha3'>At SoftWear Robotics we have an multi-disciplinary and dynamic team that continuously simulates, fabricates and tests the product prototypes and components for performance. If you wish to be a part of this team, feel free to contact us and drop your resume. </p>
        <Link to="portfolio">
                <button className="hero_btn">Read more</button>
              </Link>
        </div>
        </Col>
        <Col>
        <div className='habout_car'>
        <Carousel >
                <Carousel.Item interval={500}>
                  <img   src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-thumbnai" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                  <img   src="https://images.pexels.com/photos/8436904/pexels-photo-8436904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-thumbnai" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                  <img   src="https://images.pexels.com/photos/8437041/pexels-photo-8437041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-thumbnai" alt="Second slide" />
                </Carousel.Item>
              </Carousel> 
              </div>

        </Col>
        </Row>

    </div>
  )
}

export default Homeabout