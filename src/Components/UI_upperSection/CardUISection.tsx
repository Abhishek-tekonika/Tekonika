import React from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import "./UIsection.css";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 345,
        width: 400,
      },

    paper: {
        display: 'flex',
        height: 500,
        width: 400,
        borderRadius: 10,
        paddingTop: '56%',
        paddingBottom: '56%',
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: "#0085f2",
        opacity: "0.73",
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(39),
            height: theme.spacing(5),
            },
        },
    }),
);


const CardSection = (): JSX.Element => {
    const classes = useStyles();
    // const [spacing, setSpacing] = React.useState<GridSpacing>(3);
    
    return (
        <Box 
        position="relative" 
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
            >
            <Grid container className={classes.root} spacing={3}>
                <Row item xs={12} sm={12} md={6} lg={6} >
                    <Grid justify="center" spacing={3}>
                        {[0].map((value) => (
                        <Row key={value} item>
                            <div className="card-animation-container">
                                <Container className={ classes.root } >
                                    <Row style={{ paddingBottom: '20px', paddingRight: '12px' }}>
                                        <Col xs={12} sm={12} md={6} lg={6} >
                                            <Paper className={ classes.paper } elevation= { 7 } style={{ backgroundColor: "#0085f2" }}>
                                                <span style={{ fontSize: "36px", color: "#ffffff",
                                                    lineHeight: "40px", textAlign: "left" }}>You are in the right place
                                                </span>
                                                <p className="sub-heading-text">
                                                    <span style={{ color: "#ffffff" }}>
                                                    We are your partner in designs and we collaborate exquisitely great with businesses like yours. 
                                                    We help businesses gain confidence in their product and position them as brands that clients can trust.
                                                    </span>
                                                </p>
                                            </Paper>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Row>
                        ))}
                    </Grid>
                    <Grid justify="center" spacing={3}>
                        {[0].map((value) => (
                        <Row key={value} item>
                            <div className="card-animation-container">
                                <Container className={ classes.root } >
                                    <Row style={{ paddingBottom: '20px', paddingRight: '12px' }}>
                                        <Col xs={12} sm={12} md={6} lg={6} >
                                            <Paper className={ classes.paper } elevation= { 7 } style={{ backgroundColor: "#ffffff" }}>
                                                <span style={{ fontSize: "36px", color: "#3867f4",
                                                    lineHeight: "40px", textAlign: "left" }}>Great design offerings
                                                </span>
                                                <p className="sub-heading-text">
                                                    <span style={{ color: "#2196f3" }}>
                                                    We take problems and build solutions around them. 
                                                    We create concepts and implement designs that expresses your brand values. 
                                                    We integrate the essence of great human experience into designs from 
                                                    beautiful interfaces to innovative user interactions
                                                    </span>
                                                </p>
                                            </Paper>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Row>
                        ))}
                    </Grid>
                </Row>
            </Grid>
        
        </Box>
    );
};
                  
export default CardSection;