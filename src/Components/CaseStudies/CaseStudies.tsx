import React, { useRef } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/tekonika-site.gif";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import section1 from "./casestudies-images/Hero-image.png";
import section2 from "./casestudies-images/android-wallpaper.jpg";
import section3 from "./casestudies-images/business-computer-device.jpg";
import section4 from "./casestudies-images/cars-city-cross-walk.jpg";
import section5 from "./casestudies-images/firehouse.jpg";
import section6 from "./casestudies-images/LyftDrive.jpg";



 import "./casestudies.css";
import { grey } from "@material-ui/core/colors";

const Fade = require('react-reveal/Fade');
const Zoom = require('react-reveal/Zoom');

const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  text: {
    lineHeight: "28px",
    fontWeight: 300,
    marginTop: 20,
  },
}));

const CaseStudies = (): JSX.Element => {
  const classes = useStyles();
  
  const sliderSec = useRef(null);
  const handleLearnMore = (): void => {
    scrollToRef(sliderSec);
  }
  return (
    <React.Fragment>
      <Container >
        <Row style={{marginTop:"70px"}}>
          <Col md={6}>
            <h4 style={{color:"grey",fontStyle:"italic"}}>We are a globally-blended team.</h4>
            <span style={{paddingTop:"100px",fontSize:"28px",fontWeight:"bold"}}>Building digital ideas,</span><span style={{paddingTop:"100px",fontSize:"28px", color:"grey",fontWeight:"bold"}}> processes, & products.</span>
            <p>We create technology for clients doing amazing things. Here's how we've helped our
               clients achieve success through digital transformation.</p>
          </Col>
        </Row>
      </Container>
      {/* <Container> */}
        <div className="container-fluid">
        <Row style={{marginTop:"50px", marginBottom:"100px"}}>
          <Col md={4}>
          <Fade Top>
            <div className="dark-image">
             <img src={section1} height="350px" width="100%"/>
             <div className="content">
    <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div> 
             </div>
             </Fade>
          </Col>
          <Col md={4}>
            <Fade Top>
          <div className="dark-image">
           <img src={section2} height="350px" width="100%"/>
           <div className="content">
           <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div> 
           </div> 
           </Fade>
          </Col>
          <Col md={4}>
          <Fade Top>
          <div className="dark-image">
          <img src={section3} height="350px" width="100%"/>
          <div className="content">
          <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div> 
          </div>
          </Fade>
          </Col>
        
          <Col md={4}>
          <Fade bottom>
          <div className="dark-image">
            <img src={section4} height="350px" width="100%"/>
            <div className="content">
            <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div> 
            </div>
            </Fade>
          </Col>
          
          <Col md={4}>
          <Fade bottom>
          <div className="dark-image">
          <img src={section5} height="350px" width="100%"/>
          <div className="content">
          <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div> 
  </div>
  </Fade>
          </Col>
          <Col md={4}>
          <Fade bottom>
          <div className="dark-image">
          <img src={section6} height="350px" width="100%"/>
          <div className="content">
          <h1 className="image-heading">Heading</h1>
    <p className="image-para">Lorem ipsum dolor sit amet, an his etiam torquatos.   
       pri ponderum tractatos ei.</p>
  </div>
  </div> 
       </Fade>
          </Col>
        
        </Row>
        </div>
      {/* </Container> */}
      
    </React.Fragment>
  );
};

export default CaseStudies;
