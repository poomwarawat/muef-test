import React, { useState } from "react";
import { connect } from "react-redux";
import { Col, Row, FormGroup, Label, Input, Alert, Tooltip } from "reactstrap";

const QuestionBox = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // const [score, setScore] = useState(props.initStateINH)

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    props.dispatch({
      type: name,
      value,
    });
  };
  return (
    <div>
      <Alert color="light">
        <h3>
          {props.question.question}{" "}
          <span className="toolip-question" id="DisabledAutoHideExample">
            เพิ่มเติม.
          </span>
        </h3>
        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          autohide={false}
          target="DisabledAutoHideExample"
          toggle={toggle}
        >
          {props.question.toolips}
        </Tooltip>
        <Row className="mt-4">
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={handleChange}
                  type="radio"
                  id={`question${props.index}`}
                  name={`${props.index}${props.mode}`}
                  value={0}
                />{" "}
                ไม่เคย
              </Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={handleChange}
                  type="radio"
                  id={`question${props.index}`}
                  name={`${props.index}${props.mode}`}
                  value={1}
                />{" "}
                1-2 ครั้ง/เดือน
              </Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={handleChange}
                  type="radio"
                  id={`question${props.index}`}
                  name={`${props.index}${props.mode}`}
                  value={2}
                />{" "}
                1-2 ครั้ง/สัปดาห์
              </Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={handleChange}
                  type="radio"
                  id={`question${props.index}`}
                  name={`${props.index}${props.mode}`}
                  value={3}
                />{" "}
                3-4 ครั้ง/สัปดาห์
              </Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={handleChange}
                  type="radio"
                  id={`question${props.index}`}
                  name={`${props.index}${props.mode}`}
                  value={4}
                />{" "}
                ทุกวัน
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </Alert>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { score: state };
};

export default connect(mapStateToProps)(QuestionBox);
