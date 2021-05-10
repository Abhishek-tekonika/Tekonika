import React,{useEffect} from "react";
import { Row, Col } from "../Common/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FrontEnd from "../../assets/tekonika-frontend-pic.png";
import BackEnd from "../../assets/tekonika-backend-pic.png";
import MidSection from "./MidSection/MidSection";
import Carousel from "./Carousel/Carousel";
import FacebookIcon from "@material-ui/icons/Facebook";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyle = makeStyles((theme) => ({
  icon: {
    marginRight: "5%",
    marginTop: "10%",
    cursor: "pointer",
  },
  images: {
    width: "100%",
    height: "50%",
  },
}));

const scrollTop = (): void => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};



const WebApp = (): JSX.Element => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    scrollTop();
  }, []);

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
            <Col
              sm={8}
              md={5}
              lg={6}
              xs={10}
              style={{
                marginTop: "2%",
                paddingLeft: matches ? "18%" : "4%",
              }}
            >
              <span style={{ fontSize: "30px" }}>TEKONIKA</span>
              <br />

              <p style={{ lineHeight: "30px" }}>
                Tekonika is one of the best Web App development Companies. We
                have a team of professional experts having years of experience
                in the field of development. Our specialised team can provide
                custom web solutions to establish your business online.
              </p>
              <FacebookIcon className={classes.icon} />
              <LinkedInIcon className={classes.icon} />
            </Col>
          </Col>
          <Col />
          <Col
            sm={8}
            md={6}
            lg={6}
            xs={10}
            style={{ marginTop: "1%", padding: "auto" }}
          >
            <img alt="" className={classes.images} src={FrontEnd} /> 
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
