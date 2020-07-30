import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";
import MidSplash from "../../assets/midsectionSplash.jpg";
import CardSection from "../../Components/UI_upperSection/CardUISection";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PoolIcon from '@material-ui/icons/Pool';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import GestureIcon from '@material-ui/icons/Gesture';

import "./UIsection.css";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 345,
        backgroundColor: "#0085f2",
      },

    img: {
        width: "100%",
        opacity: "0.71",
        paddingBottom: "13px",
      },
    
    media: {
        height: 140,
      }
    }),
);


const UiDesign = (): JSX.Element => {
    const classes = useStyles();
    
    return (
        <>
            <div style={{width: "100%", minHeight: '600px'}}  className=" back-img">
                <Container style={{height: '100%'}}>
                    <Row justify="flex-start" alignItems="center">
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <div className="UI-height-100"><h1 className="bold-heading-text">
                                <span className="blue-text">UI</span>/<span className="yellow-text">UX</span> Design Company in Delhi India
                                </h1>
                                <p className="UI-sub-heading">We create with focus on your brand, and with the user at the center of design</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <CardSection />
            <div className="container_1">
            <Container style={{ paddingTop: "30px", paddingBottom: "40px" }}> 
            <Row style={{ paddingTop: '30px' }}>
                <Col xs={11} sm={11} md={4} lg={4} style={{ paddingLeft: '50px'}}>
                    <span className="UIheading-text" style={{ paddingTop: "29px" }}>An exceptionally <span className="weight-text">UI UX </span>design unique experience tailored to you</span>
                    <div style={{ width:'100%', paddingTop: "30px", boxSizing: "border-box", height: "30px" }} >
                        <Row >
                          <Col xs={12} sm={12} md={6} lg={6}>
                            <img src={MidSplash} width="400vw" height="269vh" alt="" />
                          </Col>
                        </Row>
                        <div style={{ paddingTop: "30px", boxSizing: "border-box", height: "30px", paddingLeft: "3px" }} >
                            <Button className="ui-learn-more"> Get Started  </Button>
                        </div>
                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={2} lg={2}></Col>
                <Col xs={11} sm={11} md={5} lg={5}>
                    <Row justify="space-between" style={{ paddingLeft: "-50px" }} >
                        <Col xs={11} sm={11} md={5} lg={5} className="col-background-hover" >
                          <div className="icons-blue"><PoolIcon /></div>
                          <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Insight Driven</span>
                          <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                            We leverage on the power of information and research to find out specific solutions to design problems</p>
                        </Col>
                        <Col xs={11} sm={11} md={5} lg={5} className="col-background-hover" >
                          <div className="icons-yellow"><EmojiNatureIcon /></div>
                          <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Elegant Design</span>
                          <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                            We understand the impact of beautiful designs and stunning works of art. We build with style using tools like figma</p>
                        </Col>
                    </Row>
                    <Row justify="space-between" style={{ paddingLeft: "-50" }} >
                        <Col xs={11} sm={11} md={5} lg={5} className="col-background-hover" >
                          <div className="icons-yellow"><SportsKabaddiIcon /></div>
                          <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>User Centric</span>
                          <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                            At the center of our designs is the belief that the user is the definer of purpose. We thus create designs that improve human experience. </p>
                        </Col>
                        <Col xs={11} sm={11} md={5} lg={5} className="col-background-hover" >
                          <div className="icons-blue"><GestureIcon /></div>
                          <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Quality Tested</span>
                          <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                            We chose quality above just doing it. Our solutions make sure you appreciate the beauty of great designs </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            </div>
            
            <div style={{ backgroundColor: "#f2f2f2", width: "100%", 
                    borderTopLeftRadius: "80px", borderTopRightRadius: "80px", backfaceVisibility: "visible" }} >
                <Container >
                <Row xs={12} sm={12} md={6} lg={12} > 
                    <div className={ classes.root } style={{ width: "100%", height: "220px", borderRadius: "20px", paddingTop: "80px", paddingLeft: "10px", paddingRight: "10px" }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", 
                            fontFamily: "cursive", fontStyle: "normal", fontWeight: 700, color: "#ffffff",
                            fontSize: "35.2px", lineHeight: "41.6px" }} >
                            Build your dream website or app today.
                        </Typography>
                        <Row xs={12} sm={12} md={6} lg={12} style={{ paddingTop: "30px", position: "relative", margin: "auto", display: "flex" }} >
                            <Button variant="outlined" style={{ color: "whitesmoke", borderColor: "whitesmoke", borderBlockWidth: "2px" }} >
                                Request quote
                            </Button>
                        </Row>    
                    </div>
                </Row>
                </Container>
            </div>
        </>
    );
};

export default UiDesign;