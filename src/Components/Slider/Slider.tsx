import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Slider.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  p20: {
    padding: "20px",
  },
  background: {
    backgroundColor: "#3f51b5;",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: "30px",
  },
  content: {
    color: "white",
    fontSize: "18px",
    lineHeight: "28px",
  },
}));
const Slider = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.background}>
      <Container style={{ marginTop: "6%" }}>
        <Row
          style={{ padding: "20px", marginTop: "10%" }}
          justify="space-between"
        >
          <Col
            className="MarginTop"
            style={{ width: "50%" }}
            xs={12}
            sm={12}
            md={5}
            lg={5}
          >
            <span className={classes.text}>
              Whether you need a coder, programmer,
              <br /> developer or designer
              <br /> – we can help.
            </span>
            <br />
            <p className={classes.content}>
              Tekonika is famous for its intelligent software and mobile
              application solutions within the short time of its operation, with
              an expensive set of competencies to meet the enterprise <br />
              need(s).
              <br /> We positions our goals as a leading tech company in Lagos,
              Nigeria – West African, and Africa as a whole and the world at
              large in few years’ time. <br />
              <p>At Tekonika we breath solutions.</p>
            </p>
          </Col>
          <Col
            className="MarginTop"
            style={{ width: "50%" }}
            xs={12}
            sm={12}
            md={5}
            lg={5}
          >
            {matches ? (
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                mx="auto"
                style={{
                  width: "90%",
                  height: "85%",
                  marginLeft: "3%",
                  borderRadius: "10px",
                }}
                className={classes.p20}
              ></Box>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
