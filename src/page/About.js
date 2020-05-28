import React from "react";
import About2 from "../component/Home/About";
import Header from "../component/Home/Header";
import { Container, Row, Col, Button } from "reactstrap";

const About = () => {
  return (
    <div>
      <div className="about-page">
        <Header />
        <Container>
          <div className="admin-page about-page-item">
            <About2 />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
