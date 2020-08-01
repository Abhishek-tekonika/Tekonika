import React from "react";
import { Row, Col } from "../Common/Grid";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from "@material-ui/core/styles";
import FrontEnd from "../../assets/tekonika-frontend-pic.png";
import BackEnd from "../../assets/tekonika-backend-pic.png";
import MidSection from "./MidSection/MidSection";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyle = makeStyles((theme) => ({
  icon: {
    marginRight: '5%',
    marginTop: '10%',
    cursor: 'pointer'
  },
  images: {
    width: '96%',
    height: '43%'
  }
}))
const WebApp = (): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "black"}}>
        <Row style={{ paddingLeft: "10%", paddingTop: "3%", paddingRight: "5%", paddingBottom: "3%" }}
          justify="space-between">
          <Col sm={8} md={5} lg={6} xs={10} style={{ color: "whitesmoke" }} >
          <Col sm={8} md={5} lg={6} xs={10} style={{ marginTop: "10%" }} >
            <span style={{ fontSize: '30px' }}>
              TEKONIKA</span>
            <br />
            <p style={{ fontSize: "45px", fontWeight: 'bold' }}>
              Certified Website App Company in Lagos Nigeria
              </p>
            <p style={{ lineHeight: '30px' }}>
              Tekonika is one of the best Website App Companies in Lagos Nigeria.
              We have a team of professional experts having years of experience in the field of development.
              Our specialised team can provide custom web solutions to establish your business online.
              </p>
            <FacebookIcon className={classes.icon} />
            <LinkedInIcon className={classes.icon} />
          </Col>
          </Col>
          <Col />
          <Col sm={8} md={6} lg={6} xs={10} style={{ marginTop: "5%", padding: "auto" }} >
            <img alt="" className={classes.images} src={FrontEnd} />   //#0085f2
            <img alt="" className={classes.images} src={BackEnd} />
          </Col>
        </Row>
        </div>
        <MidSection />
    </React.Fragment>
  )
}
export default WebApp;