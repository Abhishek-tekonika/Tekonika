import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  p20: {
    padding: "20px",
    height: '67%',
    width:'92%',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#e4e4e4'
    },
  },

  linkName: {
    textDecoration: "none",
    color: "white",
  },

}));

const StyledMenuItem = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'white',
      fontWeight: "bold",
      color: 'black',

    },
    backgroundColor: '#white',
    fontWeight: 500,
    fontFamily: "inherit",
    color: 'white',
    justifyContent: 'center', 
    textAlign: 'center', 
    height: '30%', 
    borderRadius: '5px', 
    border: '1px solid white',
  },
})(MenuItem);


const EndSection = (): JSX.Element => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container style={{ height: '50vh' }}>
        <Row justify="space-evenly" style={{ padding: "15px", height: '100%', marginTop: '12%' }}>
          <Col md={6} lg={6} xs={12} sm={12}>
            <Box
              boxShadow={3}
              bgcolor="background.paper"
              px="auto"
              className={classes.p20}
              style={{ backgroundColor: '#378DD8', textAlign: 'center' }}

            >
              <p style={{ marginTop: '7%', fontSize: '3vh', color: 'white' }}>Want to get Started ASAP!</p>
              <Link to="request-a-quote" className={classes.linkName} >
                <StyledMenuItem>
                  <span >Start A Project</span>
                </StyledMenuItem>
              </Link>
            </Box>
          </Col>

          <Col md={6} lg={6} xs={12} sm={12}>


            <Box
              boxShadow={3}
              bgcolor="background.paper"
              px="auto"
              className={classes.p20}
              style={{ backgroundColor: '#378DD8', textAlign: 'center' }}

            >
              <p style={{ marginTop: '7%', fontSize: '3vh', color: 'white' }}>Ready to have a conversation?</p>
              <Link to="contact-us" className={classes.linkName }>
                <StyledMenuItem>
                  <span  >Contact Us</span>
                </StyledMenuItem>
              </Link> 
            </Box>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default EndSection;