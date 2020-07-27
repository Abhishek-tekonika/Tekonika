import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/Snippet.gif";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MidSection from "../MidSection/MidSection";
import "./Home.css";

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
    margin: 0,
  },
}));

const Home = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Container>
        <Row
          style={{ padding: "20px", marginTop: "5%" }}
          justify="space-between"
        >
          <Col xs={5} sm={5} md={5} lg={5}>
            <span style={{ fontSize: "20px" }}>
              SOFTWARE DESIGN AND DEVELOPMENT
            </span>
            <br />
            <span style={{ fontSize: "70px", fontWeight: "bolder" }}>
              Go beyond technology,
              <br /> Do Tekonika
            </span>
            <br />
            <span className={classes.text} style={{ fontSize: "20px" }}>
              Tekonika is one of the most trusted names in the IT space
              delivering technology innovation in India. Our digital
              transformation strategies, problem-solving benchmarks and agile
              business models, enable our clients to digitize, scale, and
              transform in to high performance businesse
            </span>
            <br />
            <Button
              style={{ marginTop: "3%" }}
              variant="contained"
              size="large"
              color="primary"
            >
              Learn More
            </Button>
          </Col>

          <Col xs={5} sm={5} md={5} lg={5}>
            <Col
              style={{
                borderRadius: "10px",
                border: "2px solid yellow",
                padding: "20px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img className={classes.img} src={Snippet} alt="" />
            </Col>
          </Col>
        </Row>
      </Container>
      <MidSection />
    </React.Fragment>
  );
};

export default Home;
