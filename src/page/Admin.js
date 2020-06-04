import React from "react";
import Header from "../component/Home/Header";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="home-content">
        <Header />
        <Container>
          <div className="admin-page">
            <h1>ผู้ดูแลระบบ</h1>
            <div className="mt-4">
              <h3>รายชื่อสมาชิก</h3>
              <Link to="/Admin/teacher-list">
                <Button className="mr-2 mt-1" color="primary">
                  รายชื่อนักเรียนที่ลงทะเบียน
                </Button>
              </Link>
              <Link to="/Admin/user-list">
                <Button className="mt-1" color="primary">
                  รายชื่อครูที่ลงทะเบียน
                </Button>
              </Link>
            </div>
            <hr />
            <div className="mt-4">
              <h3>จัดการข้อมูล</h3>
              <p>เพิ่มข้อมูล</p>
              <Link to="/ShowStudent/ChecklistAdmin">
                <Button className="mr-2 mt-1" color="primary">
                  เพิ่มข้อมูลนักเรียน
                </Button>
              </Link>
              <Button disabled className="mt-1 mr-2" color="primary">
                เพิ่มข้อมูลคุณครู
              </Button>
              <Link to="/Admin/edit_admin">
                <Button className="mr-2 mt-1" color="primary">
                  แก้ไขข้อมูลผู้ใช้งาน
                </Button>
              </Link>
              <p className="mt-2">อัพโหลดข้อมูล</p>
              <Link to="/Admin/upload-csv">
                <Button className="mr-2 mt-1" color="primary">
                  อัพโหลดข้อมูลนักเรียนผ่าน csv
                </Button>
              </Link>
              <Button disabled className="mt-1" color="primary">
                อัพโหลดข้อมูลรักเรียนผ่าน xlsx
              </Button>
            </div>
            <div className="std-table mt-3">{/* <StudentList/> */}</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
