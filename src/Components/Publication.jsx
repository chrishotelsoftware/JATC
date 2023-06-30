import React from "react";
import "./Publication.css";
import Fotter from './Footer';
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer";

const Publication = () => {
  return (
    <div className="pub_pg">
      <Row>
        <Col>
          <h1 className="pp_t">
            Elevating Knowledge and Advancing Wearable Robotics through Research
          </h1>
        </Col>
        <Col>
          <img
            className="pp_img"
            src="https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=400"
          ></img>
        </Col>
      </Row>

      <div className="pp_cont">
        <h1 className="pp_h">
          At SoftWear Robotics, we are committed to advancing the field of
          wearable robotics through research and innovation. Explore our
          collection of publications that showcase our contributions to the
          industry
        </h1>
        <div className="pp_info">
          <h1 className="ppi_h">
            Advancements in Wearable Exoskeletons for Rehabilitation
          </h1>
          <p className="ppi_p">
            Authors: John Smith, Emily Johnson, Sarah Thompson
          </p>
          <p className="ppi_p">
            Published in: Journal of Rehabilitation Engineering
          </p>
          <p className="ppi_p">
            Summary: This paper presents the latest advancements in wearable
            exoskeleton technology for rehabilitation purposes. We discuss the
            design principles, control algorithms, and clinical applications of
            our innovative exoskeleton systems, highlighting their potential to
            improve motor function and aid in the recovery process.
          </p>
        </div>
        <br/>
        <div className="pp_info2">
          <h1 className="ppi_h">
            Advancements in Wearable Exoskeletons for Rehabilitation
          </h1>
          <p className="ppi_p">
            Authors: John Smith, Emily Johnson, Sarah Thompson
          </p>
          <p className="ppi_p">
            Published in: Journal of Rehabilitation Engineering
          </p>
          <p className="ppi_p">
            Summary: This paper presents the latest advancements in wearable
            exoskeleton technology for rehabilitation purposes. We discuss the
            design principles, control algorithms, and clinical applications of
            our innovative exoskeleton systems, highlighting their potential to
            improve motor function and aid in the recovery process.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Publication;
