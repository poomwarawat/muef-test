import React, { useState, useEffect } from "react";
import Header from "../../Home/Header";
import { Container, Input } from "reactstrap";
import API from "../../../API/API";

const Edit = (props) => {
  const [student, setStudent] = useState(null);
  const { id } = props.match.params;
  useEffect(() => {
    API.get(`/get-student/${id}`).then((res) => {
      setStudent(res.data[0]);
    });
  });
  return (
    <div>
      <div className="home-content">
        <Header />
        <Container>
          <div className="admin-page">
            <h1>แก้ไขข้อมูล</h1>
            <div className="mt-2">
              {student !== null && (
                <div>
                  <p>ชื่อ</p>
                  <Input
                    placeholder={`${student.fname}`}
                    value={`${student.fname}`}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Edit;
