import React from "react";
import Header from "../component/Home/Header";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Report = () => {
  return (
    <div>
      <div className="home-content">
        <Header />
        <Container>
          <div className="admin-page">
            <h1>รายงานผล</h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Report;
