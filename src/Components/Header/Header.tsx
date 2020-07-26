import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { Col, Row } from "../Common/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import faceBookIcon from "../../assets/facebook-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import closeIcon from "../../assets/close-icon.png";

import "./Header.css";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
    background: "#3f51b5",
    color: "white",
    fontWeight: "bold",
  },
  menuIcon: {
    cursor: "pointer",
  },
  divider: {
    backgroundColor: "transparent",
    opacity: "0.5",
    borderBottom: "1px solid white",
    margin: "150px 10px 20px 10px",
  },
  images: {
    marginRight: "20px",
    cursor: "pointer",
  },
  closeIcon: {
    textAlign: "right",
    padding: "10px",
    cursor: "pointer",
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
});

const Header = (): JSX.Element => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={(): void => setDrawerOpen(false)}
      onKeyDown={(): void => setDrawerOpen(false)}
    >
      <List>
        <div className={classes.closeIcon}>
          <img src={closeIcon} alt="" height="18" />
        </div>
      </List>
      <List>
        {["Our Services", "Our Compnay"].map((text, index) => (
          <ListItemText style={{ padding: "10px" }} key={index} primary={text} />
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListItem>
          <img src={faceBookIcon} alt="" className={classes.images} />
          <img src={twitterIcon} alt="" className={classes.images} />
          <img src={instagramIcon} alt="" className={classes.images} />
          <img src={linkedinIcon} alt="" className={classes.images} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box boxShadow={3} pl={0} pr={0}>
      <Row style={{ background: "white" }} justify="center" alignItems="center">
        <Col xs={1} sm={1} md={1} lg={1}>
          <Box
            bgcolor="white"
            pt={"12px"}
            pb={"12px"}
            pl={"25px"}
            color="black"
          >
            <Link className={classes.link} to="/">
              <h4>Tekonika</h4>
            </Link>
          </Box>
        </Col>
        <Col xs={7} sm={7} md={7} lg={7}>
          <Row justify="space-between">
            <Col xs={1} sm={1} md={1} lg={1}></Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Link className={classes.link} to="/">
                <span className="nav-items">HOME</span>
              </Link>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <Link className={classes.link} to="/ui-ux-design">
                <span className="nav-items">UI/UX DESIGN</span>
              </Link>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Link className={classes.link} to="/mobile-app-dev">
                <span className="nav-items">MOBILE APP DEVELOPMENT</span>
              </Link>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Link className={classes.link} to="/web-app-dev">
                <span className="nav-items">WEB APP DEVELOPEMENT</span>
              </Link>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}></Col>
          </Row>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Row alignItems="center" justify="space-evenly">
            <Link style={{ textDecoration: 'none' }} to="/request-a-quote">
              <Button variant="contained" color="primary">
                START A PROJECT
              </Button>
            </Link>
            <React.Fragment key={"right"}>
              <MenuIcon
                className={classes.menuIcon}
                onClick={() => setDrawerOpen(true)}
              />
              <Drawer
                transitionDuration={800}
                anchor={"right"}
                open={drawerOpen}
                onClose={(): void => setDrawerOpen(false)}
              >
                {list}
              </Drawer>
            </React.Fragment>
          </Row>
        </Col>
      </Row>
    </Box>
  );
};

export default Header;
