import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from '../Common/Grid';

import "./RequestForm.css";

const RequestForm = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container className="request-container">
        <Row justify="center">
          <Col xs={12} md={11} lg={10} xl={10}>
            <Row className="mt-150" justify="center" alignItems="center">
              <h5 className="request-container-heading1">Available booking space</h5>
            </Row>
            <Row className="mb-50" justify="center" alignItems="center">
              <h2 className="request-container-heading2">Have a project in mind?</h2>
            </Row>
            <Row className="mb-150" justify="center">
              <Col xs={12} md={11} lg={9} xl={9}>
                <div className="request-form"></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default RequestForm;