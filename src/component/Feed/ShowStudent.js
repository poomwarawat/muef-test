import React from 'react';
import {Container, Alert, Row, Col} from 'reactstrap'
import BacktoMenu from './BacktoMenu'
import {Route, Link} from 'react-router-dom'
import Table101 from './MUEF101/Table101'
import Table102 from './MUEF102/Table102'

const ShowStudent = () => {
    return (
        <div className="testing-type">
            <Container>
                <h1>ประเมินแบบทดสอบ</h1>
                <Row>
                    <Col md="12" xs="12">
                        <Link to="/ShowStudent/MUEF101">
                            <button className="testing-btn">
                                <Alert color="primary">แบบประเมินพัฒนาการ MU.EF-101 (PRE-TEST)</Alert>
                            </button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" xs="12">
                        <Link to="/ShowStudent/MUEF102">
                            <button className="testing-btn">
                                <Alert color="primary">แบบประเมินปัญหาพฤติกรรท MU.EF-102 (PRE-TEST)</Alert>
                            </button>
                        </Link>
                    </Col>                    
                </Row>
                <Route path="/ShowStudent/MUEF101" component={Table101} exact/>
                <Route path="/ShowStudent/MUEF102" component={Table102}/>                
                <BacktoMenu/>
            </Container>
        </div>
    );
}

export default ShowStudent;
