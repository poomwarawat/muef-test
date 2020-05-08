import React, {useState} from 'react';
import {Col, Row, FormGroup, Label, Input, Alert, Tooltip} from 'reactstrap'

const QuestionBox = (props) => {        
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    
    return (
        <div>
            <Alert color="light">
                <h3>{props.question.question} <span className="toolip-question" id="DisabledAutoHideExample">เพิ่มเติม.</span>
                </h3>
                <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                    {props.question.toolips}
                </Tooltip>
                <Row className="mt-4">
                    <Col md={2}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}                        
                            ไม่เคย
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            1-2 ครั้ง/เดือน
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            1-2 ครั้ง/สัปดาห์
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            3-4 ครั้ง/สัปดาห์
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            ทุกวัน
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
            </Alert>
        </div>
    );
}

export default QuestionBox;
