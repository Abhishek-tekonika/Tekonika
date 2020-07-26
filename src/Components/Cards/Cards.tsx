import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import "../Slider/Slider.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  p20: {
    padding: "20px",
  },
  background: {
    height: "80vh",
 
  },
  leftCol: {
    marginTop: "10%",
  },
  rightCol: {
    marginTop: "5%",
  },
}));
const Cards = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container>
        <Row style={{ padding: "20px" }}>
          <Col style={{ width: "30%" }} className={classes.leftCol}>
            <span
              style={{
                fontSize: "6vh",
                fontWeight: "bold",
              }}
            >
              Striving to make
              <br /> digital technology
              <br /> a more beautiful
              <br /> tool for every
              <br /> business and
              <br /> individuals
            </span>
          </Col>
          <Col
            className={classes.rightCol}
            style={{ width: "50%", marginLeft: "20%" }}
          >
            <Row style={{ height: "50%" }} justify="space-evenly">
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  width: "30%",
                  height: "65%",
                  borderRadius: "5px",
                }}
                className={classes.p20}
              ></Box>

              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  width: "30%",
                  height: "60%",

                  borderRadius: "5px",
                }}
                className={classes.p20}
              ></Box>
            </Row>

            {/*Row for aligning*/}
            <Row style={{ height: "50%" }} justify="space-evenly">
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  width: "30%",
                  height: "60%",

                  borderRadius: "5px",
                }}
                className={classes.p20}
              ></Box>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  width: "30%",
                  height: "60%",
                  borderRadius: "5px",
                }}
                className={classes.p20}
              ></Box>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cards;
