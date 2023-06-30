import React from 'react'
import './Products.css';
import {Row,Col}  from"react-bootstrap";
import { Link } from 'react-router-dom';
import Footer from './Footer';
 

const Products = () => {
  return (
    <div className='prod_pg'>
      <div pp_h>
        <Row>
          <Col>
          <h1 className='pph_t'>Innovative Wearable Robotics Redefining Human Potential</h1>
          </Col>
          <Col>
          <img src=' prod.png' className='pph_img'></img>
          </Col>
        </Row>
        
      </div>
      <div className='prod_con'>
        <h1 className='tm_h'>At SoftWear Robotics, we are dedicated to developing innovative wearable robotics solutions that augment and enhance individual capabilities. Explore our range of cutting-edge products designed to provide unique benefits and improve the quality of life</h1>
        <h1 className='prod_hh'>Our Products</h1>
        <Row>
          <Col>
          <h1 className='p_h'> Assistive Exoskeleton</h1>
          <p  className='p_p'> Our assistive exoskeleton is designed to provide support and assistance to individuals with mobility challenges. It utilizes advanced robotics and sensor technologies to enhance strength and mobility, allowing users to regain independence and perform daily activities with ease.</p>
          </Col>
          <Col>
          <img src='p1.png' className='p_img'></img>
          </Col>
          <Col>
          <video controls className='p_vid'>
      <source src="v1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className='p_h'> Assistive Exoskeleton</h1>
          <p  className='p_p'> Our assistive exoskeleton is designed to provide support and assistance to individuals with mobility challenges. It utilizes advanced robotics and sensor technologies to enhance strength and mobility, allowing users to regain independence and perform daily activities with ease.</p>
          </Col>
          <Col>
          <img src='p1.png' className='p_img'></img>
          </Col>
          <Col>
          <video controls className='p_vid'>
      <source src="v1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className='p_h'> Assistive Exoskeleton</h1>
          <p  className='p_p'> Our assistive exoskeleton is designed to provide support and assistance to individuals with mobility challenges. It utilizes advanced robotics and sensor technologies to enhance strength and mobility, allowing users to regain independence and perform daily activities with ease.</p>
          </Col>
          <Col>
          <img src='p1.png' className='p_img'></img>
          </Col>
          <Col>
          <video controls className='p_vid'>
      <source src="v1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
          </Col>
        </Row>
        <h1 className='tm_h'> At SoftWear Robotics, we continuously innovate and explore new frontiers in wearable robotics, developing solutions that cater to a wide range of needs and applications. Each product is meticulously designed and engineered to provide exceptional performance, comfort, and user experience.</h1>
        <Link to="/Contactus">
          <button className="hero_btn">Contact us</button>
        </Link>

      </div>
      <Footer/>
     
    </div>
  )
}

export default Products