import React from "react";
import { Row } from "../../Common/Grid";
import { Col } from "../../Common/Grid";
import { Container } from "../../Common/Grid";
import slider1 from "../../../assets/angular-svg-vector-3.png";
import slider2 from "../../../assets/flask.png";
import slider3 from "../../../assets/React_logo_wordmark.png";
import slider4 from  "../../../assets/nodejs-logo-png-transparent.png";


import "./carousel.css";

const Carousel = (): JSX.Element => {

  return (
    <React.Fragment>
     <Container className="carousel" >
        <Row className="carousel-heading" >
          <Col xs={10} sm={10} md={8} lg={8} style={{textAlign: "center"}}>
          <span > Our Technologies !</span>
          </Col>
        </Row>
        <Row className="slider-section" justify="flex-start" >
          <Col xs={4} sm={4} md={3} lg={3} style={{ marginBottom: "20px", marginTop: "20px", padding: "3px" }} >
            <img src={slider1} width = "100%" height = "50%" />
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} style={{ marginBottom: "20px", marginTop: "20px", padding: "3px" }} >
            <img src={slider2} width = "100%" height = "50%" />
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} style={{ marginBottom: "20px", marginTop: "20px", padding: "3px" }} >
            <img src={slider3} width = "100%" height = "50%" />
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} style={{ marginBottom: "20px", marginTop: "20px", padding: "3px" }} >
            <img src={slider4} width = "100%" height = "50%" />
          </Col>

        </Row>
      </Container>
    </React.Fragment>
  )

}

export default Carousel;