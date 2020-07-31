import React from "react";
import { Col, Row } from "../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Slider.css";

// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  p20: {
    padding: "10px",
  },
  background: {
    backgroundColor: "#3f51b5;",
    marginTop: '6%'

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
  listItem: {
    fontSize: '20px',

  }
}));
const Slider = (): JSX.Element => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.background}>

      <Row
        style={{ padding: "20px", marginTop: "10%" }}
        justify="space-evenly"
      >
        <Col
          className="MarginTop"
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

          xs={12}
          sm={12}
          md={5}
          lg={5}
        >

          <Box
            boxShadow={3}
            bgcolor="background.paper"
            px="auto"
            mx="auto"
            style={{

              borderRadius: "10px",
            }}
            className={classes.p20}
          >
            <ul style={{ listStyle: 'none' }}>
              <li className={classes.listItem}> Mobile App Developement
              <div className="progress-bar">
              <span style={{ width: "85%" }} ></span>
              </div>
              </li>
              <li className={classes.listItem}> Web App Developement</li>
              <div className="progress-bar">
              <span style={{ width: "98%" }} ></span>
              </div>
              <li className={classes.listItem}>UI & UX Design</li>
              <div className="progress-bar">
              <span style={{ width: "92%" }} ></span>
              </div>
              <li className={classes.listItem}> IT Outsourcing</li>
              <div className="progress-bar">
              <span style={{ width: "82%" }} ></span>
              </div>
              
            </ul>

          </Box>

        </Col>
      </Row>

    </div>
  );
};

export default Slider;
