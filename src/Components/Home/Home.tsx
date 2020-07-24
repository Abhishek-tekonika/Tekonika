import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/Snippet.gif";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: "100 %",
    width: "80%",
  },
}));

const Home = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Row style={{direction:"revert"}}>
          <Col md={6} xs={6}>
            <span>
              SOFTWARE DESIGN AND DEVELOPMENT Go beyond technology, Do Aitechma
              Aitechma is one of the most trusted names in the IT space
              delivering technology innovation in Africa. Our digital
              transformation strategies, problem-solving benchmarks and agile
              business models, enable our clients to digitize, scale, and
              transform in to high performance businesses.
            </span>
          </Col>
          <Col md={6} xs={6}>
            <img alt="" className={classes.img} src={Snippet} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
