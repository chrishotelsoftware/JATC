import React from 'react'
import "./Homecollab.css";
import {Row,Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const Homecollab = () => {
  return (
    <div className='hcollab'>
        <h1 className='hc1'>Collaborators</h1>
        <h4 className='hc2'> Trusted by organizations</h4>
        <div className='imgo'>
        <Row>
        <Col >
          <Image src="AIIMS.jpg" rounded  className='imgc'/>
        </Col>
        <Col >
          <Image src="DEBEL.jpg"rounded className='imgc' />
        </Col>
      
      </Row>
        </div>
        </div>
  )
}

export default Homecollab