import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copy-right">
            <img
              className="footer-img"
              src="http://test.challenge-cognition.com/MU-EF-home/img/logo/rcn.png"
            />
            <p className="mt-3">©Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
