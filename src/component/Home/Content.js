import React from 'react';
import {Row, Col, Button, Container} from 'reactstrap'

const Content = () => {
    return (
        <div className="index-content">
            <Container>
                <div className="start-content">                    
                    <Row>
                        <Col>
                            <div className="name-content">
                                <h1>WELCOME TO MU.EF</h1>
                                <p className="info-content">แบบทดสอบออนไลน์สำหรับประเมินทักษะการคิดเชิงบริหารในเด็กปฐมวัย</p>
                                <hr/>
                                <p className="ps-content">
                                    แบบประเมินนี้ใช้สำหรับการอบรมเท่านั้น ถ้าต้องการใช้ในงานวิจัยกรุณาติดต่อ
                                    <a href="/"> ตามที่อยู่นี้</a>
                                </p>
                                <Button color="primary">เริ่มต้นทำแบบทดสอบ</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Content;
