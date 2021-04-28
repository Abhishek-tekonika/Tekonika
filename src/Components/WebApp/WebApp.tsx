import React from "react";
import { Row, Col } from "../Common/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import FrontEnd from "../../assets/tekonika-frontend-pic.png";
import BackEnd from "../../assets/tekonika-backend-pic.png";
import MidSection from "./MidSection/MidSection";
import Carousel from "./Carousel/Carousel";
import FacebookIcon from "@material-ui/icons/Facebook";

const RubberBand = require("react-reveal/RubberBand");
const Jump = require("react-reveal/Jump");

const useStyle = makeStyles((theme) => ({
  icon: {
    marginRight: "5%",
    marginTop: "10%",
    cursor: "pointer",
  },
  images: {
    width: "96%",
    height: "43%",
  },
}));
const WebApp = (): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "black" }}>
        <Row
          style={{
            paddingLeft: "10%",
            paddingTop: "3%",
            paddingRight: "5%",
            paddingBottom: "3%",
          }}
          justify="space-between"
        >
          <Col sm={8} md={5} lg={6} xs={10} style={{ color: "whitesmoke" }}>
            <RubberBand duration={2000}>
              <Col sm={8} md={5} lg={6} xs={10} style={{ marginTop: "10%" }}>
                <span style={{ fontSize: "30px" }}>TEKONIKA</span>
                <br />
                <p style={{ fontSize: "45px", fontWeight: "bold" }}>
                  Certified Web App Company in Delhi, India.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  Tekonika is one of the best Web App Companies in Delhi. We
                  have a team of professional experts having years of experience
                  in the field of development. Our specialised team can provide
                  custom web solutions to establish your business online.
                </p>
                <FacebookIcon className={classes.icon} />
                <LinkedInIcon className={classes.icon} />
              </Col>
            </RubberBand>
          </Col>
          <Col />
          <Col
            sm={8}
            md={6}
            lg={6}
            xs={10}
            style={{ marginTop: "5%", padding: "auto" }}
          >
            <img alt="" className={classes.images} src={FrontEnd} /> //#0085f2
            <img alt="" className={classes.images} src={BackEnd} />
          </Col>
        </Row>
      </div>
      <MidSection />
      <Carousel />
    </React.Fragment>
  );
};
export default WebApp;
