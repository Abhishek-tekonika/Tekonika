import React from "react";
import { Row, Col, Container } from "../../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ImageComparison from "../ImageComparison/ImageComparison";

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#0085F2",
  },
  bodyText: {
    lineHeight: "20px",
  },
}));
const MidSectiontion = (): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Container>
        <Row
          justify="space-between"
          style={{ padding: "20px", marginTop: "5%" }}
        >
          <Col lg={6} xs={12} md={6} sm={12}>
            <h1>Projects testimony Image</h1>
          </Col>
          <Col lg={6} xs={12} md={6} sm={12}>
            <span style={{ fontSize: "8vh", fontWeight: "bold" }}>
              We build best apps!
            </span>
            <br />
            <span className={classes.bodyText}>
              Being the best website and web App development company we strive
              to deliver world-class solutions and a better user experience to
              our customers. Our high-quality service is the reason why our
              clients keep coming back to us.
              <br />
              <br />
              We use high-end technologies to create customized web services to
              get your brand online. Focusing on process-driven development, our
              highly dedicated and skilled developers deliver solutions that
              will help you in catering your customers’ unique requirements
              effectively.
              <br /> <br />
              <br />
              We follow the same strategy for every start-up, be it a medium or
              a large scale organization, to understand how the user interacts
              and focus on implementing the best tactics to ensure maximum
              engagement and satisfaction to the user. With years of experience
              in providing customized web development services, we have
              successfully managed to deliver tons of projects in multiple
              industries.
              <br /> <br />
              <br />
              Our qualified developers are expert professionals in HTML5, CSS3,
              PHP, JavaScript,TypeScript. We ensure you get a top-quality
              website and web apps in the shortest time possible.
            </span>
          </Col>
        </Row>
      </Container>
      <ImageComparison />
    </React.Fragment>
  );
};

export default MidSectiontion;
