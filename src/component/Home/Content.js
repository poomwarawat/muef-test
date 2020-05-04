import React from 'react';
import {Row, Col, Button, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import About from './About'
import Know from './Know'
import Contact from './Contact'
import Footer from './Footer'

const Content = () => {
    return (
        <div>
        <div className="index-content">
            <Container>
                <div data-aos="fade-down" data-aos-duration="2500" className="start-content">                    
                    <Row>
                        <Col>
                            <div className="name-content">
                                <h1>WELCOME TO MU.EF</h1>
                                <p className="info-content">แบบทดสอบออนไลน์สำหรับประเมินทักษะการคิดเชิงบริหารในเด็กปฐมวัย</p>
                                <hr/>
                                <p className="ps-content">
                                    แบบประเมินนี้ใช้สำหรับการอบรมเท่านั้น ถ้าต้องการใช้ในงานวิจัยกรุณาติดต่อ {" "}
                                    <a href="/">ตามที่อยู่นี้</a>
                                </p>
                                <Link to="/ShowStudent">
                                    <Button  color="primary">เริ่มต้นทำแบบทดสอบ</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="to-view-details">
                                <div>
                                    <svg className="bi bi-arrow-down" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"/>
                                        <path fillRule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>            
        </div>
            <div>
                <About/>
            </div>
            <div>
                <Know/>
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Content;
