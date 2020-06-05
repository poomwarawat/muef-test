import React, { useState, useEffect } from "react";
import Header from "../../Home/Header";
import { Container, Button, Spinner, Table, Alert } from "reactstrap";
import Dropzone from "react-dropzone";
import csv from "csv";
import API from "../../../API/API";
import { Redirect } from "react-router-dom";

const Csvupload = () => {
  const [newStudent, setNewstudent] = useState(null);
  const [spinnerState, setSpinner] = useState(false);
  const [user, setUser] = useState("");
  const [toTest, setTotest] = useState(false);
  const token = localStorage.getItem("key");
  var color = "black";
  useEffect(() => {
    API.get(`/get-access-user/${token}`).then((res) => {
      setUser(res.data[0].username);
    });
  });
  const handleUpload = () => {
    if (newStudent === null) {
      alert("โปรดเลือกข้อมูล");
    } else {
      toUpload();
    }
  };
  const toUpload = () => {
    setSpinner(true);
    const Data = new FormData();
    for (let index = 1; index < newStudent.length; index++) {
      console.log(newStudent[index]);
      Data.append(`newstd${index}`, newStudent[index]);
    }
    Data.append("LengthData", newStudent.length - 1);
    Data.append("username", user);
    API.post("/admin/upload-csv-data", Data).then((res) => {
      if (res.data.add) {
        setSpinner(false);
        setTotest(true);
      }
    });
  };

  if (toTest === true) {
    return <Redirect to="/ShowStudent/MUEF101" />;
  }
  const spinner = () => {
    if (spinnerState === true) {
      return (
        <div className="bg-spinner">
          <div className="center-page">
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
          </div>
        </div>
      );
    }
  };
  const validateTime = (time) => {
    const timeSplit = time.split("/");
    const currentTime = new Date();
    const currentTimeSring = `${currentTime.getUTCDay()}/${currentTime.getUTCMonth()}/${currentTime.getUTCFullYear()}`;
    const currentTimeSplit = currentTimeSring.split("/");
    var yearCalculator = currentTimeSplit[2] - timeSplit[2];
    const monthCalculartor = currentTimeSplit[1] - timeSplit[1];
    if (monthCalculartor < 0) {
      yearCalculator -= 1;
    }
    if (yearCalculator > 6 || yearCalculator < 2) {
      color = "red";
    }
  };
  return (
    <div className="upload-csv-page">
      <Header />
      <Container>
        <div className="admin-page">
          <div>
            <h3>ขั้นตอนการอัพโหลดข้อมูล</h3>
            <div className="alert alert-primary">
              1. สร้างข้อมูลในโปรแกรม Microsoft Excel หรือโปรแกรมอื่นๆ
              โดยกำหนดให้รูปแบบคอลั่มตรงกับในตาราง
            </div>
            <div className="alert alert-primary">
              2. ส่งออกหรือเซฟข้อมูลในนามสกุล .csv
            </div>
            <div className="alert alert-primary">
              3. กดยังปุ่มบริเวณข้างล่างหรือลากไฟล์ที่ต้องการนำเข้ามาวาง
            </div>
            <div className="alert alert-primary">
              4. ตรวจสอบความครบถ้วนของข้อมูล
            </div>
            <div className="alert alert-primary">
              5. กดปุ่ม Upload เพื่อเพิ่มข้อมูล
            </div>
            <h5>หมายเหตุ*</h5>
            <p>กรุณาสร้างข้อมูลหรือตารางให้ตรงกับฟอร์ม</p>
            <Alert color="danger">
              กรุณาตรวจสอบข้อมูลในบรรทัดที่มีสีแดง (วันที่, เพศ)
            </Alert>
            <div className="alert alert-info">
              <Dropzone
                onDrop={(acceptedFiles) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    csv.parse(reader.result, (err, data) => {
                      setNewstudent(data);
                    });
                  };
                  reader.readAsBinaryString(acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="mt-3">
                        กดที่นี่หรือลากไฟล์มาวางเพื่อเพิ่มข้อมูล
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
          <div className="table-new-student">
            <Table striped>
              <thead>
                <tr>
                  <th>stdId</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>ชื่อเล่น</th>
                  <th>เพศ</th>
                  <th>วันเกิด</th>
                  <th>เงินเดือน</th>
                  <th>เลขที่</th>
                  <th>ห้อง</th>
                  <th>ชื่อโรงเรียน</th>
                  <th>ตำบล</th>
                  <th>อำเภอ</th>
                  <th>จังหวัด</th>
                  <th>create</th>
                  <th>codeId</th>
                  <th>user</th>
                </tr>
              </thead>
              <tbody>
                {newStudent !== null &&
                  newStudent.map((data, index) => {
                    if (index > 0) {
                      validateTime(data[5]);
                      return (
                        <tr style={{ color: `${color}` }} key={index}>
                          <th scope="row">Auto</th>
                          <td>{data[1]}</td>
                          <td>{data[2]}</td>
                          <td>{data[3]}</td>
                          <td>{data[4]}</td>
                          <td>{data[5]}</td>
                          <td>{data[6]}</td>
                          <td>{data[7]}</td>
                          <td>{data[8]}</td>
                          <td>{data[9]}</td>
                          <td>{data[10]}</td>
                          <td>{data[11]}</td>
                          <td>{data[12]}</td>
                          <td>Auto</td>
                          <td>{data[14]}</td>
                          <td>{data[15]}</td>
                          {(color = "black")}
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </Table>
          </div>
          <div>
            <Button onClick={handleUpload} className="mt-2" color="primary">
              Upload
            </Button>
            {spinner()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Csvupload;
