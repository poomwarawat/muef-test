import React, { useState, useEffect } from "react";
import Header from "../../Home/Header";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
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
        <div className="edit-bg-page">
          <Container>
            <div className="edit-page">
              <h1>แก้ไขข้อมูล</h1>
              <div className="mt-2">
                {student !== null && (
                  <div>
                    <div>
                      <p>ชื่อ</p>
                      <Input
                        placeholder={`${student.fname}`}
                        value={`${student.fname}`}
                      />
                    </div>
                    <div className="mt-2">
                      <p>นามสกุล</p>
                      <Input
                        placeholder={`${student.lname}`}
                        value={`${student.lname}`}
                      />
                    </div>
                    <div className="mt-2">
                      <p>ชื่อเล่น</p>
                      <Input
                        placeholder={`${student.nname}`}
                        value={`${student.nname}`}
                      />
                    </div>
                    <div className="mt-2">
                      <p>เพศ</p>
                      <Input
                        placeholder={`${student.gender}`}
                        value={`${student.gender}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Edit;
