import React from "react";
import { Col, Row, Container } from "../../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageSlider from "react-image-comparison-slider";
import FrontEnd from "../../../assets/FrontEnd.png";

import BackEnd from "../../../assets/BackEnd.png";
const useStyles = makeStyles((theme) => ({

  text: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  bodyText: {
    lineHeight: '25px'
  }
}))

const ImageComparison = (): JSX.Element => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Row style={{ padding: "20px", marginTop: "5%" }}
          justify="space-evenly">

          <Col md={3} lg={3} sm={12} xs={12}>

            <span className={classes.text}>Front End Developement</span>
            <br />
            <span className={classes.bodyText}>
              We are the best front end development company in Lagos Nigeria.
              We develop an interactive and attractive
              looking web application front end for you using Angular 6+ a framework by google
              Not only Angular we work with React a framework by facebook .


              </span>
          </Col>
          <Col md={6} lg={6} sm={12} xs={12}>

            <div style={{ width: "90%", height: "120%",marginLeft:'3%' }}>
              <ImageSlider
                image1={FrontEnd}
                image2={BackEnd}
                sliderWidth={3}
                sliderColor="blue"
                handleColor="blue"
                handleBackgroundColor="white"
              />
            </div>
          </Col>
          <Col md={3} lg={3} sm={12} xs={12}>

            <span className={classes.text}> Back End Development</span>
            <br />
            <span className={classes.bodyText}>

              Users may not see your back-end code,
              but they experience the power of those snippets through the product’s functionality.
              We develop back end APIs that will communicate with your front-end.
            </span>
          </Col>
        </Row>
        <br/>
       
      </Container>

    </React.Fragment>
  );
}
export default ImageComparison;