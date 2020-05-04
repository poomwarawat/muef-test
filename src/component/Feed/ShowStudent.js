import React from 'react';
import {Container, Alert, Row, Col, Table} from 'reactstrap'

const ShowStudent = () => {
    return (
        <div className="testing-type">
            <Container>
                <h1>ประเมินแบบทดสอบ</h1>
                <Row>
                    <Col md="12" xs="12">
                        <button className="testing-btn">
                            <Alert color="primary">แบบประเมินพัฒนาการ MU.EF-101 (PRE-TEST)</Alert>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" xs="12">
                        <button className="testing-btn">
                            <Alert color="primary">แบบประเมินปัญหาพฤติกรรท MU.EF-102 (PRE-TEST)</Alert>
                        </button>
                    </Col>
                </Row>
                <h1>รายชื่อนักเรียนที่กรอกข้อมูลแบบฟอร์ม MU.EF 101</h1>
                <div className="table-bg">
                <Table light>
                <thead>
                    <tr>
                    <th>ลำดับ</th>
                    <th>รหัสนักเรียน</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>แบบประเมิน</th>
                    <th>ผลประเมิน</th>
                    <th>หมายเหตุ*</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>1583305020994IHH</td>
                        <td>test test</td>
                        <td></td>
                        <td>ผลประเมิน</td>
                        <td></td>
                    </tr> 
                    <tr>
                        <th scope="row">1</th>
                        <td>1584295754523mRn</td>
                        <td>test test</td>
                        <td></td>
                        <td>ผลประเมิน</td>
                        <td></td>
                    </tr>                    
                </tbody>
                </Table>
                </div>
            </Container>
        </div>
    );
}

export default ShowStudent;
