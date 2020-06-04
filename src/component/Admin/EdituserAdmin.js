import React, { useState, Suspense } from "react";
import Header from "../Home/Header";
import { Container, Button, Row, Col, Alert } from "reactstrap";
import SpinComp from "../SpinComp";
import Search from "./Search";
const Users = React.lazy(() => {
  const x = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("./Users"));
    }, 1500);
  });
  return x;
});

const EdituserAdmin = () => {
  const [data, setData] = useState(null);
  const [notfound, setNotFound] = useState(false);
  // const not = [{id : "ไม่พบข้อมูล", fname : "ไม่พบข้อมูล", lname : "ไม่พบข้อมูล", username : "ไม่พบข้อมูล"}]
  const handleSearch = (e) => {
    if (e.not) {
      setNotFound(true);
    }
    setData(e);
  };
  return (
    <div className="edit-user-admin">
      <Header />
      <Container>
        <div className="edit-user-admin-component">
          <h1>แก้ไขข้อมูลสมาชิก</h1>
          <hr />
          <Row>
            <Col className="mt-2" md={5}>
              <Search type="student" handleSearch={handleSearch} />
            </Col>
          </Row>
          <div className="all-user-list-bg mt-2">
            <div className="all-user-list">
              <Suspense fallback={<SpinComp />}>
                {data ? (
                  <Users type="user" userlist={data} edit={true} />
                ) : null}
              </Suspense>
              <Suspense fallback={<SpinComp />}>
                {notfound && (
                  <div>
                    <Alert color="light" className="mb-3 pb-3">
                      ไม่พบข้อมูล
                    </Alert>
                  </div>
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EdituserAdmin;
