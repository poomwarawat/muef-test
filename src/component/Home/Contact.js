import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-down" data-aos-duration="2500">
      <Container>
        <h3>ติดต่อเรา</h3>
        <hr />
        <h5>ถ้ามีข้อสงสัยเกี่ยวกับแบบประเมินนี้ ติดต่อเราได้ที่ : </h5>
        <Row className="mt-4">
          <Col sm="4">
            <p>รองศาสตราจารย์ ดร. นวลจันทร์ จุฑาภักดีกุล</p>
            <p>ศูนย์วิจัยประสาทวิทยาศาสตร์</p>
            <p>สถาบันชีววิทยาศาสตร์โมเลกุล</p>
            <p>25/25 ถนนพุทธมณฑลสาย 4 , ศาลายา, นครปฐม 73170, ประเทศไทย.</p>
            <p>โทรศัพท์: 66 (0) 2441-9003 to 7 ต่อ 1203, 1330</p>
          </Col>
          <Col sm="4">
            <p>Email</p>
            <p>nuanchan.chu@mahidol.edu</p>
            <p>Website</p>
            <p>
              <a href="https://mb.mahidol.ac.th/th/mu-ef-101-102/?fbclid=IwAR3nsSYRPcGcP0yGYCdd11K6URYfJBvvXH6i5Bbi3oNoVjBmEGb5Uj2aRPY">
                Neuroscience - Mahidol
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
