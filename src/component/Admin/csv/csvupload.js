import React, { useState } from "react";
import Header from "../../Home/Header";
import { Container, Row, Col, Button, Input, Table } from "reactstrap";
import Dropzone from "react-dropzone";
import csv from "csv";

const Csvupload = () => {
  const [newStudent, setNewstudent] = useState(null);
  return (
    <div className="home-content">
      <Header />
      <Container>
        <div className="admin-page">
          <h1>Upload csv</h1>
          <div>
            <h3>กรุณาเลือกไฟล์</h3>
            <h5>หมายเหตุ*</h5>
            <p>กรุณาสร้างข้อมูลหรือตารางให้ตรงกับฟอร์ม</p>
            <div className="upload-area">
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
                      <p>
                        Drag 'n' drop some files here, or click to select files
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
                      return (
                        <tr key={index}>
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
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </Table>
          </div>
          <div>
            <Button className="mt-2" color="primary">
              Upload
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Csvupload;
