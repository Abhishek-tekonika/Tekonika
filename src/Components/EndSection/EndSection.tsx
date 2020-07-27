import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

  p20: {
    padding: "20px",
    height: '67%',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#e4e4e4'
    },
  },

}));


const EndSection = (): JSX.Element => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container style={{ height: '50vh' }}>
        <Row justify="space-between" style={{ padding: "15px", height: '100%',marginTop:'12%'}}>
          <Col md={5} lg={5} xs={12} sm={12}>
            <Box
              boxShadow={3}
              bgcolor="background.paper"
              px="auto"
              className={classes.p20}
              style={{ backgroundColor: '#F3B421', textAlign: 'center' }}

            >
              <p style={{ marginTop: '3%', fontSize: '3vh', color: 'white' }}>Want to get Started ASAP!</p>
              {/* <Button variant="contained" color="primary">
                Start A Project
               </Button> */}
              {/* <Row style={{ backgroundColor: '#F3B421', justifyContent: 'center', alignItems: 'center', height: '30%', borderRadius: '10px', border: '1px solid white' }} >
                < span style={{color:'white'}}>Start A Project</span>
              </Row> */}
               <Row style={{ backgroundColor: '#F3B421', justifyContent: 'center', alignItems: 'center', height: '30%', borderRadius: '5px', border: '1px solid white' }} >
                <span style={{color:'white'}}>Start A Project</span>
              </Row>
            </Box>
          </Col>
          
          <Col md={5} lg={5} xs={12} sm={12}>
          

            <Box
              boxShadow={3}
              bgcolor="background.paper"
              px="auto"
              className={classes.p20}
              style={{ backgroundColor: '#0085F2', textAlign: 'center' }}

            >
              <p style={{ marginTop: '3%', fontSize: '3vh', color: 'white' }}>Ready to have a conversation?</p>
              {/* <Button variant="contained" color="primary">
                Start A Project
               </Button> */}
              <Row style={{ backgroundColor: '#0085F2', justifyContent: 'center', alignItems: 'center', height: '30%', borderRadius: '5px', border: '1px solid white' }} >
                <span style={{color:'white'}}>Contact Us</span>
              </Row>
            </Box>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default EndSection;