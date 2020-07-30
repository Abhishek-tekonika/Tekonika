import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./UIsection.css";

const CardSection = (): JSX.Element => {
    
    return (
        <div style={{ width: "200", height: "200%", paddingTop: "120px", 
        paddingBottom: "100px", backfaceVisibility: "hidden", boxSizing: "border-box", 
        backgroundColor: "#f2f2f2" }}>
            <Row >
                <Col xs={12} sm={12} md={5} lg={6} style= {{ paddingLeft: "80px", paddingRight: "15px" }} >
                    <div style={{height: '400px', width: "100%", background: '#0085f2'}}>
                        <div style={{ paddingLeft: "70px", paddingRight: "70px", paddingTop: "110px" }}>
                            <span className="card-heading">
                            You are in the right place
                            </span>
                        </div>
                        <p className="sub-heading-text" style={{ paddingLeft: "70px", paddingRight: "80px" }} >
                            <span style={{ color: "#ffffff" }}>
                            We are your partner in designs and we collaborate <br />exquisitely great with businesses like yours. 
                            We help<br /> businesses gain confidence in their product and<br /> position them as brands that clients can trust.
                            </span>
                            <div style={{ paddingTop: "34px" }} >
                                <Button className="learn-more" variant="contained" >LEARN MORE<ArrowForwardIosIcon /> </Button>
                            </div>
                        </p>
                        
                    </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={6} style= {{ paddingLeft: "15px", paddingRight: "80px" }} >
                    <div style={{height: '400px', width: "100%", background: '#ffffff'}}>
                        <div style={{ paddingLeft: "70px", paddingRight: "70px", paddingTop: "70px" }}>
                            <span className="card-heading" style={{ color: "#0085f2" }}>
                            Great design offerings
                            </span>
                        </div>
                        <br />
                        <p className="sub-heading-text" style={{ paddingLeft: "70px", paddingRight: "80px" }}>
                            <span style={{ color: "#0085f2" }}>
                            We take problems and build solutions around them. 
                            We create concepts and implement designs that expresses 
                            your brand values. We integrate the essence of great human 
                            experience into designs from beautiful interfaces to innovative 
                            user interactions.
                            </span>
                            <div style={{ paddingTop: "37px" }} >
                                <Button className="learn-more" variant="contained" >LEARN MORE<ArrowForwardIosIcon /> </Button>
                            </div>
                        </p>
                        
                    </div>
                </Col>
            </Row>
        
        </div>
   )
};

export default CardSection;