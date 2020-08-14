import React, { Suspense } from "react";
import { Container, Alert, Row, Col } from "reactstrap";
import BacktoMenu from "./BacktoMenu";
import SpinComp from "../SpinComp";
import { Route, Link } from "react-router-dom";
// import Table101 from './MUEF101/Table101'
// import Table102 from './MUEF102/Table102'
const Table101 = React.lazy(() => {
  const x = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("./MUEF101/Table101"));
    }, 1500);
  });
  return x;
});
const Table102 = React.lazy(() => {
  const x = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("./MUEF102/Table102"));
    }, 1500);
  });
  return x;
});

const ShowStudent = () => {
  return (
    <Suspense fallback={<SpinComp />}>
      <div className="testing-type">
        <Container>
          <h3>ประเมินแบบทดสอบ</h3>
          <Row>
            <Col md="12" xs="12">
              <Link to="/ShowStudent/MUEF101">
                <button className="testing-btn">
                  <Alert color="primary">
                    แบบประเมินพัฒนาการ MU.EF-101 (PRE-TEST)
                  </Alert>
                </button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md="12" xs="12">
              <Link to="/ShowStudent/MUEF102">
                <button className="testing-btn">
                  <Alert color="primary">
                    แบบประเมินปัญหาพฤติกรรม MU.EF-102 (PRE-TEST)
                  </Alert>
                </button>
              </Link>
            </Col>
          </Row>
          <Route path="/ShowStudent/MUEF101" component={Table101} exact />
          <Route path="/ShowStudent/MUEF102" component={Table102} />
          <BacktoMenu />
        </Container>
      </div>
    </Suspense>
  );
};

export default ShowStudent;
