import React from "react";
import Contact2 from "../component/Home/Contact";
import Header from "../component/Home/Header";
import { Container, Row, Col, Button } from "reactstrap";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <Header />
        <Container>
          <div className="admin-page contact-page-item">
            <Contact2 />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
