import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
//import SimpleZoom from "../../Components/UI_upperSection/ZoomTransition";
import UIsplash from "../../assets/UIsplash_bg.jpg";
import MidSplash from "../../assets/midsectionSplash.jpg";
import CardSection from "../../Components/UI_upperSection/CardUISection";
import Footer from "../../Components/Footer/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
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
        maxWidth: 345,
        backgroundColor: "#0085f2",
      },

    img: {
        height: "120vh",
        width: "100vw",
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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
    
    return (
        <>
            <Header />
            <div style={{width: "100%"}}>
                <Row>
                    <Col xs={12}>
                        <img className={classes.img} src={UIsplash} alt="/" />
                    </Col>
                    <Col xs={12} sm={12}>
                        <div className={matches ? "alignment-top-sub-heading" : ""}>
                            <h1><span style={{ color: "#2196f3" }}>UI</span>
                            <span style={{ color: "#ffffff" }}>/</span>
                            <span style={{ color: "#fcc525" }}>UX</span>
                            <span style={{ color: "#ffffff" }}>Design Company in New Delhi</span>
                            </h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <CardSection />
            <div className="icon-section-container">
                <Container>
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
                                    <Button className="learn-more"> Get Started  </Button>
                                </div>
                            </div>
                            
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                        <Col xs={11} sm={11} md={5} lg={5}>
                            <Row justify="space-between" style={{ paddingLeft: "-50" }} >
                                <Col xs={11} sm={11} md={5} lg={5}>
                                  <div className="icons-blue"><PoolIcon /></div>
                                  <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Insight Driven</span>
                                  <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", paddingBottom: "0px", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                                    We leverage on the power of information and research to find out specific solutions to design problems</p>
                                </Col>
                                <Col xs={11} sm={11} md={5} lg={5}>
                                  <div className="icons-yellow"><EmojiNatureIcon /></div>
                                  <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Elegant Design</span>
                                  <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", paddingBottom: "0px", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                                    We understand the impact of beautiful designs and stunning works of art. We build with style using tools like figma</p>
                                </Col>
                            </Row>
                            <Row justify="space-between" style={{ paddingLeft: "-50" }} >
                                <Col xs={11} sm={11} md={5} lg={5}>
                                  <div className="icons-yellow"><SportsKabaddiIcon /></div>
                                  <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>User Centric</span>
                                  <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", paddingBottom: "0px", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                                    At the center of our designs is the belief that the user is the definer of purpose. We thus create designs that improve human experience. </p>
                                </Col>
                                <Col xs={11} sm={11} md={5} lg={5}>
                                  <div className="icons-blue"><GestureIcon /></div>
                                  <span style={{ fontSize: "28.9px", fontFamily: "Raleway", fontWeight: 400, lineHeight: "32px", opacity: "1" }}>Quality Tested</span>
                                  <p style={{ fontSize: "16px", lineHeight: "29px", opacity: "0.75", paddingBottom: "0px", color: "#444", fontStyle: "inherit", textAlign: "left" }}>
                                    We chose quality above just doing it. Our solutions make sure you appreciate the beauty of great designs </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div >
                <Row style={{ width: "200", paddingTop: "30px", paddingLeft: "20px", paddingRight: "20px", 
                              paddingBottom: "30px", backfaceVisibility: "hidden", boxSizing: "border-box", 
                              backgroundColor: "#f2f2f2" }} > 
                    <div style={{ paddingLeft: "90px", paddingRight: "90px", justifyItems: "center" }} >
                        <Card className={classes.root} style={{ boxShadow: "70", borderRadius: "20px", paddingLeft: "50px", paddingRight: "50px", paddingTop: "15px", paddingBottom: "15px" }} >
                            <CardActionArea style={{ borderRadius: "20px", paddingTop: "20px", paddingBottom: "20px" }} > 
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", 
                                        fontFamily: "cursive", fontStyle: "normal", fontWeight: 700, color: "#ffffff",
                                        fontSize: "35.2px", lineHeight: "41.6px" }} >
                                    Build your dream website or app today.
                                    </Typography>
                                    <div style={{ paddingTop: "10px", paddingLeft: "73px", paddingRight: "73px "}} >
                                        <Button variant="outlined" color="primary" style={{ justifyItems: "center" }} >
                                            Request quote
                                        </Button>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Row>
            </div>
            
            <Footer />
        </>
    );
};

export default UiDesign;