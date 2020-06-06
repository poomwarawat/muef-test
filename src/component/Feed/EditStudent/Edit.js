import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

const initState = {
  fname: "",
  lname: "",
  nname: "",
  gender: "",
  birthday: "",
  salary: "",
  stdCode: "",
  stdRoom: "",
  schoolname: "",
  region: "",
  district: "",
  province: "",
};

const Edit = (props) => {
  const [student, setStudent] = useState(null);
  const { id } = props.match.params;
  const [editData, setEditDate] = useState(initState);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    API.get(`/get-student/${id}`).then((res) => {
      setStudent(res.data[0]);
    });
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setEditDate({ ...editData, [key]: value });
  };
  const handleUpdate = () => {
    const key = Object.keys(editData);
    const SendData = new FormData();
    SendData.append("id", id);
    for (let index = 0; index < key.length; index++) {
      const data = editData[key[index]];
      if (data !== "") {
        SendData.append(`${key[index]}`, data);
      }
    }
    async function FetchData() {
      const api = await API.post("/update-student-data", SendData);
      const result = api.data;
      if (result.update === true) {
        alert("อัพเดตข้อมูลสำเร็จ");
        setRedirect(true);
      }
    }
    FetchData();
  };
  if (redirect === true) {
    return <Redirect to="/ShowStudent/MUEF101" />;
  }
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
                      <Input id="fname" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>นามสกุล</p>
                      <Input id="lname" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>ชื่อเล่น</p>
                      <Input id="nname" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>เพศ (male, female)</p>
                      <Input id="gender" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>วันเกิด (วว/ดด/ปป)</p>
                      <Input id="birthday" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>เงินเดือน</p>
                      <Input id="salary" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>เลขที่</p>
                      <Input id="stdCode" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>ห้อง</p>
                      <Input id="stdRoom" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>โรงเรียน/ศูนย์พัฒนาเด็ก</p>
                      <Input id="schoolname" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>ตำบล</p>
                      <Input id="region" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>อำเภอ</p>
                      <Input id="district" onChange={handleChange} />
                    </div>
                    <div className="mt-2">
                      <p>จังหวัด</p>
                      <Input id="province" onChange={handleChange} />
                    </div>
                  </div>
                )}
              </div>
              <Button className="mt-2" color="primary" onClick={handleUpdate}>
                แก้ไขข้อมูล
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Edit;
