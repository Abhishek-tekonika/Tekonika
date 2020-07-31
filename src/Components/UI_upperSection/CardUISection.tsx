import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./UIsection.css";

const CardSection = (): JSX.Element => {
    
    return (
        <div style={{ width: "100%", height: "200%", paddingTop: "120px", 
        paddingBottom: "100px", backfaceVisibility: "hidden", boxSizing: "border-box", 
        backgroundColor: "#f2f2f2" }}>
        <Container>
        <Row justify="space-evenly" >
            <Col xs={11} sm={11} md={5} lg={5} className="mb-10" >
                <div style={{ background: '#0085f2', height: '100%'}} className="ui-top-card mb-10">
                    <div>
                        <span className="card-heading">
                            You are in the right place
                        </span>
                    </div>
                    <p className="sub-heading-text"  >
                        <span style={{ color: "#ffffff" }}>
                        We are your partner in designs and we collaborate exquisitely great with businesses like yours. 
                        We help businesses gain confidence in their product and position them as brands that clients can trust.
                        </span>
                        <div style={{ paddingTop: "34px" }} >
                            <Button className="learn-more" variant="contained" >LEARN MORE<ArrowForwardIosIcon /> </Button>
                        </div>
                    </p>
                </div>
            </Col>
            <Col xs={11} sm={11} md={5} lg={5} className="mb-10" >
                <div style={{height: '100%', background: '#ffffff'}} className="ui-top-card mb-10">
                    <div>
                        <span className="card-heading" style={{ color: "#0085f2" }}>
                            Great design offerings
                        </span>
                    </div>
                    <br />
                    <p className="sub-heading-text">
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
        </Container>
        
        </div>
   )
};

export default CardSection;