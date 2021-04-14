import React from "react";
import { Row } from "../../Common/Grid";
import { Col } from "../../Common/Grid";
import { Container } from "../../Common/Grid";
import slider1 from "../../../assets/angular.png";
import slider2 from "../../../assets/elastic-icon.png";
import slider3 from "../../../assets/React-icon.png";
import slider4 from  "../../../assets/nodejs-logo-png-transparent.png";
import slider5 from "../../../assets/react-native.png";
import slider6 from "../../../assets/mongodb.png";

import "./carousel.css";

const Carousel = (): JSX.Element => {
  return (
    <React.Fragment>
     <Container className="carousel" >
        <Row className="carousel-heading" justify="center" >
          <Col xs={10} sm={10} md={8} lg={8}>
          <span> Our Technologies !</span>
          </Col>
        </Row>
        <Row justify="center" >
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider1} width = "60%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider2} width = "60%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider3} width = "60%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider4} width = "60%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider5} width = "65%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={2} lg={2}>
            <img src={slider6} width = "60%" alt="" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )

}

export default Carousel;