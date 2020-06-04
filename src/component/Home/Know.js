import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Know = () => {
  return (
    <div className="know" data-aos="fade-down" data-aos-duration="2500">
      <Container>
        <h1>สิ่งที่ควรทราบ</h1>
        <hr />
        <h3>
          -
          สิ่งที่คุณครูหรือผู้ปกครองควรทราบก่อนการทำแบบประเมินด้านการคิดเชิงบริหาร
        </h3>
        <Row className="know-center mt-4">
          <Col sm="4">
            <img
              className="know-icon"
              src="http://icons.iconarchive.com/icons/xenatt/the-circle/512/App-Messages-icon.png"
            />
            <Link to="/technicalterms">
              <p className="topic-name mt-3">คำศัพท์ที่สำคัญและความหมาย</p>
            </Link>
            <p className="topic-detail">คำศัพท์ต่าง ๆ ที่ใช้ในแบบประเมินนี้</p>
          </Col>
          <Col sm="4">
            <img
              className="know-icon"
              src="https://cdn4.iconfinder.com/data/icons/flat-icon-set/2133/flat_icons-graficheria.it-01.png"
            />
            <Link to="/instruction">
              <p className="topic-name mt-3">ขั้นตอนการทำแบบประเมิน</p>
            </Link>
            <p className="topic-detail">
              อธิบายขั้นตอนการลงทะเบียนและการทำแบบประเมิน
            </p>
          </Col>
          <Col sm="4">
            <img
              className="know-icon"
              src="https://image.flaticon.com/icons/png/512/138/138339.png"
            />
            <Link to="/aboutresult">
              <p className="topic-name mt-3">อธิบายวิธีการประมวลผล</p>
            </Link>
            <p className="topic-detail">
              อธิบายวิธีการแปลผลที่ได้จากการทำแบบประเมิน
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Know;
