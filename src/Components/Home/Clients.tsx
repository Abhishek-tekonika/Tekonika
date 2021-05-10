import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Stigasoft from "./clients-logo/stigasoft.png";
import Sourcefuse from "./clients-logo/sourcefuse.png";
import bikebazaar from "./clients-logo/bikebazaar.svg";
import wheelsemi from "./clients-logo/wheelsemi.png";
import wiziq from "./clients-logo/wiziq-logo.png";
import yuno from "./clients-logo/yuno_logo.png";
import whitehilllogo from "./clients-logo/whitehilllogo.png";
import hiyatri from "./clients-logo/HiYatriLogo.png";
import aggio from "./clients-logo/aggio.png";
import "./Clients.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Clients = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
        <div style={{ backgroundColor: "#5f61ab" ,padding:'1% 0% 1% 0%',margin:'6% 0% 6% 0%'}}>
          <h2
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontSize: "60px",
              fontWeight: "bolder",
              color: "whitesmoke",
            }}
          >
            Our Journey so far
          </h2>
          <h3
            style={{
              fontSize: "18px",
              textAlign: "center",
              marginBottom: "100px",
              color: "whitesmoke",
            }}
          >
            Since 2018, we have helped a number of companies convert their
            digital ideas into engaging, feature rich apps
          </h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="image-logo"
                style={{ width: "42%", height: "90%" }}
                src={wheelsemi}
                alt="wheelsemi"
              />
            </div>
            <div className="col-md-4">
              <img
                className="image-logo"
                src={Sourcefuse}
                alt="sourcefuse"
                style={{ width: "50%" }}
              />
            </div>
            <div className="col-md-4">
              <img
                className="image-logo"
                style={{ width: "50%" }}
                src={bikebazaar}
                alt="bikebazaar"
              />
            </div>
          </div>
          <div className="row img-space">
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo"
                style={{ width: "35%", paddingTop: "7%", height: "60px" }}
                src={wiziq}
                alt="wiziq"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo"
                src={yuno}
                alt="yuno"
                style={{ width: "40%", height: "70%" }}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo-1"
                style={{ width: "45%", marginLeft:'20%',height: "100px" }}
                src={whitehilllogo}
                alt="yuno"
              />
            </div>
          </div>
          <div className="row img-space1">
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo"
                src={hiyatri}
                alt="hiyatri"
                style={{ width: "70%", height: "140px", marginLeft: "20px" }}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo"
                src={Stigasoft}
                alt="stigasoft"
                style={{ height: "100%", width: "140px", paddingTop: "6%" }}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                className="image-logo"
                src={aggio}
                alt="aggio"
               
                style={{ height: "100%", width:"140px",paddingTop: "6%"}}
              />
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};
export default Clients;
