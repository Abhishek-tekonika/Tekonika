import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import Chart from "../../assets/Chart.png";
import Node from "../../assets/node.svg";
import Javascript from "../../assets/javascript.svg";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../Components/Footer/Footer";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import EndSection from "../EndSection/EndSection";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: "70px",
    height: "70px",
    marginTop: "20%",
  },
  circle: {
    borderRadius: "60px",
    backgroundColor: "#e4e4e4",
    width: "120px",
    height: "120px",
    textAlign: "center",
    // marginLeft: "35%",
  },
  innerdiv: {},
  text: {
    lineHeight: "28px",
    fontWeight: 300,
    margin: 0,
  },
}));
const MidSection = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Row
          style={{ padding: "20px", marginTop: "10%" }}
          justify="space-between"
        >
          <Col style={{ width: "30%" }} xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} alt="" src={Chart} />
              </div>
              <br />
              <i>
                <span>Hello Figma!</span>
              </i>
              <br />
              <span style={{ fontSize: "40px" }}>
                <span style={{ color: "#d4d4d4" }}>01.</span>Research
              </span>
            </div>

            <br />
            <p className={classes.text}>
              You have an amazing idea that needs adequate evaluation. Tekonika
              will help you explore your idea potential can providing a
              professional service for you in prototyping the idea through user
              interface and user experience design
            </p>
          </Col>
          <Col style={{ width: "30%" }} xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} src={Javascript} alt="" />
              </div>
              <br />
              <i>
                <span>Hi Javascript!</span>
              </i>
              <br />
              <span style={{ fontSize: "40px" }}>
                <span style={{ color: "#d4d4d4" }}>02.</span>Design
              </span>
            </div>

            <br />
            <p className={classes.text}>
              Front-end development of your product using creative
              tools/programming language to achieve a responsive and attractive
              design for your product. We render the best service in the area of
              front-end web and mobile development.
            </p>
          </Col>
          <Col style={{ width: "30%" }} xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} alt="" src={Node} />
              </div>

              <br />
              <i>
                <span>Hello Node!</span>
              </i>
              <br />
              <span style={{ fontSize: "40px" }}>
                <span style={{ color: "#d4d4d4" }}>03.</span>Develop
              </span>
            </div>

            <br />
            <p className={classes.text}>
              After prototyping and front-end design, we proceed to the
              development of the product internal structure and control features
              which include the database. We use the most powerful back-end
              framework to achieve this.
            </p>
          </Col>
        </Row>
      </Container>
      <Slider />
      <Cards />
      <EndSection/>
      <Footer />
    </React.Fragment>
  );
};
export default MidSection;
