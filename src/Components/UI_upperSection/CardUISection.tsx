import React from "react";
import { Row, Col, Container } from "../Common/Grid";

import "./UIsection.css";

const CardSection = (): JSX.Element => {
    
   return (
       <Container style={{width:'100%'}}>
           <Row justify="space-evenly">
               <Col xs={12} sm={12} md={5} lg={5}>
                   <div style={{height: '300px', background: 'blue'}}></div>
               </Col>

               <Col xs={12} sm={12} md={5} lg={5}>
                    <div style={{height: '300px', background: 'yellow'}}></div>
               </Col>
           </Row>
       </Container>
   )
};

export default CardSection;