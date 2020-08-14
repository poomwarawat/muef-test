import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="About" data-aos="fade-down" data-aos-duration="2500">
      <Container>
        <h3>เกี่ยวกับเรา</h3>
        <hr />
        <Row>
          <Col className="div-center mt-2" sm="12">
            <p>รายละเอียดโครงการวิจัย</p>
            <img
              className="img-about"
              src="http://test.challenge-cognition.com/MU-EF-home/img/logo/logo2.png"
            />
          </Col>
        </Row>
        <h3 className="mt-4">โครงการนี้ได้รับการสนับสนุนจาก</h3>
        <hr />
        <Row>
          <Col className="div-center mt-2" sm="4">
            <p>สำนักงานคณะกรรมการวิจัยแห่งชาติ (วช.)</p>
            <img
              className="img-about"
              src="https://yt3.ggpht.com/a/AATXAJymuBubzXDNVXw1fHaZISbwojoJMIwNT1422g=s900-c-k-c0xffffffff-no-rj-mo"
            />
          </Col>
          <Col className="div-center mt-2" sm="4">
            <p>สถาบันวิจัยระบบสาธารณสุข (สวรส)</p>
            <img
              className="img-about"
              src="https://www.health-startpage.com/wp-content/uploads/2016/10/12961237_1050072295030994_9216449362979956164_o-1024x1024.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
