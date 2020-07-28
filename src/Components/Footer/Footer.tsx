import React from "react";
import { Container, Row, Col } from "../Common/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Divider } from "@material-ui/core";

import "./Footer.css";

const Footer = (): JSX.Element => {
  return (
    <Container className="footer-container">
      <Row style={{marginTop:"10%"}}justify="space-between">
        <Col xs={5} sm={5} md={5} lg={5}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="footer-uppercase-heading">Want to work with us?</p>
              <p className="footer-text">
                We build technology rich apps and solutions which give the best
                user experience. We always use latest technologies and
                methodology to build the products. We provide extensive support
                to our clients in the areas of design, development and
                marketing.
              </p>
              <p className="footer-bold-text">Hire us today!</p>
            </Col>
          </Row>
          <Row style={{ marginBottom: "40px" }}>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="footer-uppercase-heading">
                Follow us on social media
              </p>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className="footer-links">Facebook</span>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className="footer-links">Instagram</span>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TwitterIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className="footer-links">Twitter</span>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className="footer-links">LinkedIn</span>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="footer-text">
                © 2020 Tekonika. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="footer-uppercase-heading">Get in touch</p>
              <ul className="footer-contact-list">
                <li className="pt-20">
                  <label className="footer-bold-text" htmlFor="email">
                    Email
                  </label>
                  <p className="footer-text" id="email">
                    contact-us@tekonika.co
                  </p>
                </li>
                <Divider className="mt-10" />
                <li className="pt-20">
                  <label className="footer-bold-text" htmlFor="Phone">
                    Phone
                  </label>
                  <p className="footer-text" id="Phone">
                    0000000000
                  </p>
                </li>
                <Divider className="mt-10" />
                <li className="pt-20">
                  <label className="footer-bold-text" htmlFor="Address">
                    Address
                  </label>
                  <p className="footer-text" id="Address">
                    Address here
                  </p>
                </li>
                <Divider className="mt-10" />
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
