import React from 'react';
import Header from '../component/Home/Header'
import { Container, Row, Col, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const Admin = () => {            
    return (
        <div>
            <div className="home-content">
                <Header/>
                <Container>
                    <div className="admin-page">
                        <h1>ผู้ดูแลระบบ</h1>
                        <div className="mt-4">
                            <h3>รายชื่อสมาชิก</h3>
                            <Row className="mt-3">
                                <Col md="3">
                                    <p>จำนวนคุณครูที่ลงทะเบียน <span>30</span> คน</p>
                                </Col>
                                <Col md="3">
                                    <p>จำนวนนักเรียนที่ลงทะเบียน <span>30</span> คน</p>
                                </Col>
                            </Row>
                            <Button className="mr-2 mt-1" color="primary">รายชื่อนักเรียนที่ลงทะเบียน</Button>
                            <Link to="/Admin/user-list">
                                <Button className="mt-1" color="primary">รายชื่อครูที่ลงทะเบียน</Button>
                            </Link>
                        </div>
                        <hr/>
                        <div className="mt-4">
                            <h3>จัดการข้อมูล</h3>
                            <p>เพิ่มข้อมูล</p>
                            <Button className="mr-2 mt-1" color="primary">เพิ่มข้อมูลนักเรียน</Button>
                            <Button className="mt-1" color="primary">เพิ่มข้อมูลคุณครู</Button>
                            <p className="mt-2">อัพโหลดข้อมูล</p>
                            <Button className="mr-2 mt-1" color="primary">อัพโหลดข้อมูลรักเรียนผ่าน csv</Button>
                            <Button className="mt-1" color="primary">อัพโหลดข้อมูลรักเรียนผ่าน xlsx</Button>
                        </div>
                        <div className="std-table mt-3">
                            {/* <StudentList/> */}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Admin;
