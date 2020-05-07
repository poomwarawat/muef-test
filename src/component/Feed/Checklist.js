import React, {useState, useEffect} from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const Checklist = () => {
    const [error, setError] = useState("")
    return (
        <div className="checklist-user">
            <Container>
                <h1>กรอกข้อมูลทั่วไปของนักเรียนลงในช่องต่อไปนี้ให้ครบทุกช่องก่อนทำแบบประเมิน</h1>
                <Form>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="name">ชื่อ</Label>
                                <Input type="text" id="name" name="name" placeholder="กรุณาใส่ชื่อ"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="lastname">นามสกุล</Label>
                                <Input type="text" id="lastname" name="lastname" placeholder="กรุณาใส่นามสกุล"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="nickname">ชื่อเล่น</Label>
                                <Input type="text" id="nickname" name="nickname" placeholder="กรุณาใส่ชื่อเล่น"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Label>เพศ</Label>
                            <FormGroup check>
                                <Row>
                                    <Col md={3}>
                                        <Label check>
                                            <Input type="radio" name="male" />
                                            ชาย
                                        </Label>
                                    </Col>    
                                    <Col md={3}>
                                        <Label check>
                                            <Input type="radio" name="female" />
                                            หญิง
                                        </Label>
                                    </Col>    
                                </Row>                                                                    
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="birthday">วันเกิด</Label>
                                <Input type="date" name="birthday" id="birthday"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="salary">รายได้เฉลี่ยครอบครัว</Label>
                                <Input type="select" name="salary" id="salary">
                                    <option>ต่ำกว่า 15,000 บาท/เดือน</option>
                                    <option>15,000 - 30,000 บาท/เดือน</option>
                                    <option>มากกว่า 30,000 บาท/เดือน</option>                            
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="number">เลขที่</Label>
                                <Input type="text" id="number" name="number" placeholder="กรุณาใส่เลขที่"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="room">ห้อง</Label>
                                <Input type="text" id="room" name="room" placeholder="กรุณาใส่ห้อง"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="schoolname">โรงเรียน/ ศูนย์พัฒนาเด็ก</Label>
                                <Input type="text" id="schoolname" name="schoolname" placeholder="กรุณาใส่ชื่อโรงเรียน/ ศูนย์พัฒนาเด็ก"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="number">ตำบล</Label>
                                <Input type="text" id="number" name="number" placeholder="กรุณาใส่ตำบล"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="room">อำเภอ</Label>
                                <Input type="text" id="room" name="room" placeholder="กรุณาใส่อำเภอ"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="schoolname">จังหวัด</Label>
                                <Input type="select">
                                <option value="">--กรุณาเลือกจังหวัด--</option><option value="กระบี่">กระบี่</option><option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option><option value="กาญจนบุรี">กาญจนบุรี</option><option value="กาฬสินธุ์">กาฬสินธุ์</option><option value="กำแพงเพชร">กำแพงเพชร</option><option value="ขอนแก่น">ขอนแก่น</option><option value="จันทบุรี">จันทบุรี</option><option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option><option value="ชลบุรี">ชลบุรี</option><option value="ชัยนาท">ชัยนาท</option><option value="ชัยภูมิ">ชัยภูมิ</option><option value="ชุมพร">ชุมพร</option><option value="เชียงราย">เชียงราย</option><option value="เชียงใหม่">เชียงใหม่</option><option value="ตรัง">ตรัง</option><option value="ตราด">ตราด</option><option value="ตาก">ตาก</option><option value="นครนายก">นครนายก</option><option value="นครปฐม">นครปฐม</option><option value="นครพนม">นครพนม</option><option value="นครราชสีมา">นครราชสีมา</option><option value="นครศรีธรรมราช">นครศรีธรรมราช</option><option value="นครสวรรค์">นครสวรรค์</option><option value="นนทบุรี">นนทบุรี</option><option value="นราธิวาส">นราธิวาส</option><option value="น่าน">น่าน</option><option value="บึงกาฬ">บึงกาฬ</option><option value="บุรีรัมย์">บุรีรัมย์</option><option value="ปทุมธานี">ปทุมธานี</option><option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option><option value="ปราจีนบุรี">ปราจีนบุรี</option><option value="ปัตตานี">ปัตตานี</option><option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option><option value="พะเยา">พะเยา</option><option value="พังงา">พังงา</option><option value="พัทลุง">พัทลุง</option><option value="พิจิตร">พิจิตร</option><option value="พิษณุโลก">พิษณุโลก</option><option value="เพชรบุรี">เพชรบุรี</option><option value="เพชรบูรณ์">เพชรบูรณ์</option><option value="แพร่">แพร่</option><option value="ภูเก็ต">ภูเก็ต</option><option value="มหาสารคาม">มหาสารคาม</option><option value="มุกดาหาร">มุกดาหาร</option><option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option><option value="ยโสธร">ยโสธร</option><option value="ยะลา">ยะลา</option><option value="ร้อยเอ็ด">ร้อยเอ็ด</option><option value="ระนอง">ระนอง</option><option value="ระยอง">ระยอง</option><option value="ราชบุรี">ราชบุรี</option><option value="ลพบุรี">ลพบุรี</option><option value="ลำปาง">ลำปาง</option><option value="ลำพูน">ลำพูน</option><option value="เลย">เลย</option><option value="ศรีสะเกษ">ศรีสะเกษ</option><option value="สกลนคร">สกลนคร</option><option value="สงขลา">สงขลา</option><option value="สตูล">สตูล</option><option value="สมุทรปราการ">สมุทรปราการ</option><option value="สมุทรสงคราม">สมุทรสงคราม</option><option value="สมุทรสาคร">สมุทรสาคร</option><option value="สระแก้ว">สระแก้ว</option><option value="สระบุรี">สระบุรี</option><option value="สิงห์บุรี">สิงห์บุรี</option><option value="สุโขทัย">สุโขทัย</option><option value="สุพรรณบุรี">สุพรรณบุรี</option><option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option><option value="สุรินทร์">สุรินทร์</option><option value="หนองคาย">หนองคาย</option><option value="หนองบัวลำภู">หนองบัวลำภู</option><option value="อ่างทอง">อ่างทอง</option><option value="อำนาจเจริญ">อำนาจเจริญ</option><option value="อุดรธานี">อุดรธานี</option><option value="อุตรดิตถ์">อุตรดิตถ์</option><option value="อุทัยธานี">อุทัยธานี</option><option value="อุบลราชธานี">อุบลราชธานี</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="username">Username ผู้ประเมิน</Label>
                                <Input type="text" name="username" value={"warawat555@gmail.com"} disabled/>
                            </FormGroup>
                        </Col>          
                        <Col md={8}>
                            <Label htmlFor="Error"></Label>
                            <Alert color="danger" id="Error">Error Message</Alert>
                        </Col>          
                    </Row>
                </Form>
                <div className="back-menu">
                <div>
                        <Link to="/ShowStudent">
                            <Button color="dark" outline>กลับสู่หน้าหลัก</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/ShowStudent/MU-EF-101">                        
                            <Button color="dark">เริ่มประเมิน</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Checklist;
