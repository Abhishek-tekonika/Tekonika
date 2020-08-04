import React from "react";
import { Row } from "../../Common/Grid";
import { Col } from "../../Common/Grid";
import { Container } from "../../Common/Grid";
import slider1 from "../../../assets/angular.png";
import slider2 from "../../../assets/elastic-icon.png";
import slider3 from "../../../assets/React-icon.png";
import slider4 from  "../../../assets/nodejs-logo-png-transparent.png";

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
          <Col xs={8} sm={6} md={3} lg={3}>
            <img src={slider1} width = "90%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={3} lg={3}>
            <img src={slider2} width = "90%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={3} lg={3}>
            <img src={slider3} width = "90%" alt="" />
          </Col>
          <Col xs={8} sm={6} md={3} lg={3}>
            <img src={slider4} width = "90%" alt="" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )

}

export default Carousel;