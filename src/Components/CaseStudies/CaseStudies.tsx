import React, { useRef } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/tekonika-site.gif";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


// import "./Home.css";

const Fade = require('react-reveal/Fade');

const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  text: {
    lineHeight: "28px",
    fontWeight: 300,
    marginTop: 20,
  },
}));

const CaseStudies = (): JSX.Element => {
  const classes = useStyles();
  
  const sliderSec = useRef(null);
  const handleLearnMore = (): void => {
    scrollToRef(sliderSec);
  }
  return (
    <React.Fragment>
      <Container>
        <h1>hii</h1>
      </Container>
      
    </React.Fragment>
  );
};

export default CaseStudies;
