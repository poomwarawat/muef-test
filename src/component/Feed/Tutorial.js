import React from 'react';
import { Container, Alert, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Tutorial = () => {
    return (
        <div className="tutorial">
            <Container>
                <div>
                    <h1>คำชี้แจงการใช้แบบ MU.EF-101</h1>
                    <Alert color="danger">1. แบบประเมินนี้ใช้ประเมิน <span>พัฒนาการด้านการคิดเชิงบริหารในเด็กอายุ 2-6 ปี</span></Alert>
                    <Alert color="danger">2. แบบประเมินนี้สำหรับครูผู้ดูแลเด็ก/ครูอนุบาล ใช้ประเมินพฤติกรรมเด็กในชั้นเรียนที่ครูรู้จักคุ้นเคย พฤติกรรมเด็กเป็นอย่างดี <span>ครูผู้ประเมินควรเป็นครูที่เคยสอนหรือดูแลเด็กที่ถูกประเมินมาแล้วอย่างน้อยไม่ต่ำกว่า 3 เดือน</span>
                    </Alert>
                    <Alert color="danger">3. ท่านจะต้องกรอกข้อมูลให้ครบและทำการกดปุ่ม "บันทึกและดูคะแนนการประเมิน" เพื่อทำการบันทึกข้อมูลที่ท่านตอบทั้งหมดลงในระบบ หากท่านกรอกข้อมูลไม่ครบ ระบบจะไม่สามารถบันทึกข้อมูลไว้ได้ ท่านจะต้องเริ่มกรอกข้อมูลใหม่ทั้งหมด</Alert>
                </div>
                <div>
                    <h1>ขั้นตอนการประเมิน MU.EF-101</h1>
                    <Alert color="primary">1. กรอกข้อมูลทั่วไปของครูและนักเรียน ให้ครบทุกช่องก่อนเริ่มทำแบบประเมิน</Alert>
                    <Alert color="primary">2. ตอบคำถามเกี่ยวกับพัฒนาการด้านการคิดเชิงบริหารของเด็กอายุ 2-6 ปี จำนวน 5 กลุ่ม ทั้งหมด 32 ข้อ ให้เลือกตอบให้ตรงกับความจริงมากที่สุด</Alert>
                    <Alert color="primary">3. แบบประเมินนี้ต้องการทราบว่า เด็กมีพฤติกรรมเหล่านี้บ่อยแค่ไหนในช่วง 3 เดือนที่ผ่านมา</Alert>
                </div>
                <div className="back-menu">
                    <div>
                        <Link to="/ShowStudent">
                            <Button color="light" outline>ย้อนกลับ</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/ShowStudent/Checklist">
                            <Button color="light">เริ่มการประเมิน</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Tutorial;
