import React from "react";
import { Col } from "../Common/Grid";
import { Row } from "../Common/Grid";
import { Container } from "../Common/Grid";

const MidSection = (): JSX.Element => {
  return (
    <React.Fragment>
      <Container>
        <Row style={{marginLeft:'%6'}}>
          <Col>
            <p><i>Hello Figma!</i></p>
            <p style={{fontSize:"10px"}}>Research</p>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default MidSection;
