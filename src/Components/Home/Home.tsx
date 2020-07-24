import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/Snippet.gif";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.scss";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: "100 %",
    width: "80%",
    marginTop: "3%",

  },
}));

const Home = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Row style={{ padding: "20px", marginTop: "5%" }}>
          <Col sm={12} md={6} xs={12}>
            <span style={{ fontSize: "18px" }}>
              <h2>
                Software Design And Developement
                <span className="underline"> Technology,</span>
              </h2>
              Tekonika is one of the most trusted names in the IT space
              delivering technology innovation in india. Our digital
              transformation strategies, problem-solving benchmarks and agile
              business models, enable our clients to digitize, scale, and
              transform in to high performance businesses.
            </span>
            <br />
            <Button
              className="button"
              size="large"
              style={{ marginTop: "2%" }}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Learn More
            </Button>
          </Col>
          <Col sm={12} md={6} xs={12}>
            <img alt="" className={classes.img} src={Snippet} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
