import React from "react";
import Header from "../Header";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
const Instruction = () => {
  return (
    <div className="technicalterms-page">
      <Header />
      <Container>
        <div className="technicalterms-component">
          <h1>ขั้นตอนการทำแบบประเมิน</h1>
          <hr />
          <div>
            <h3>เมื่อเริ่มต้นทำแบบประเมินครั้งแรก ให้ปฏิบัติดังนี้</h3>
            <ul>
              <li>
                <p className="process-list">
                  ทำการลงทะเบียนโดยกดที่ปุ่ม ลงทะเบียน
                </p>
              </li>
              <li>
                <p className="process-list">
                  กรอกข้อมูลส่วนตัวให้ครบ แล้วกด ยืนยันการลงทะเบียน
                </p>
              </li>
              <li>
                <p className="process-list">
                  ทำการเช็คอีเมลของท่านเพื่อ ยืนยันการลงทะเบียน
                </p>
              </li>
              <li>
                <p className="process-list">
                  กดที่ปุ่มเริ่มต้นทำแบบประเมิน เพื่อเลือกแบบประเมิน
                  (แบบประเมินพัฒนาการ MU.EF-101 หรือ แบบประเมินปัญหาพฤติกรรม
                  MU.EF-102)
                </p>
              </li>
              <li>
                <p className="process-list">
                  หากท่านไม่เข้าใจข้อคำถามหรือข้อความใดๆ สามารถดูคำอธิบาย
                  โดยกดที่สัญลักษณ์ Notes icon หน้าข้อความนั้น
                </p>
              </li>
              <li>
                <p className="process-list">
                  ท่านจะต้องกรอกข้อมูลให้ครบและทำการกดปุ่ม
                  "บันทึกและดูคะแนนการประเมิน"
                  เพื่อทำการบันทึกข้อมูลที่ท่านตอบทั้งหมดลงในระบบ
                  หากท่านกรอกข้อมูลไม่ครบ ระบบจะไม่สามารถบันทึกข้อมูลไว้ได้
                  ท่านจะต้องเริ่มกรอกข้อมูลใหม่ทั้งหมด
                </p>
              </li>
            </ul>
          </div>
          <div className="back-to-home">
            <Link to="/">
              <Button color="light">กลับสู่หน้าหลัก</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Instruction;
