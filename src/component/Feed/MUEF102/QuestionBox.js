import React, { useState } from "react";
import { connect } from "react-redux";
import { Col, Row, FormGroup, Label, Input, Alert, Tooltip } from "reactstrap";

const QuestionBox = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // const [score, setScore] = useState(props.initStateINH)
  const mode = props.mode;
  const index = props.index;
  const keytoolips = `${mode}${index}102`;
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
        <h5 style={{ color: "#333333" }}>
          {props.question.question}{" "}
          <span className="toolip-question" id={keytoolips}>
            เพิ่มเติม.
          </span>
        </h5>
        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          target={keytoolips}
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
                <p style={{ color: "#333333" }}>ไม่เคย</p>
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
                <p style={{ color: "#333333" }}>1-2 ครั้ง/เดือน</p>
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
                <p style={{ color: "#333333" }}>1-2 ครั้ง/สัปดาห์</p>
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
                <p style={{ color: "#333333" }}>3-4 ครั้ง/สัปดาห์</p>
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
                <p style={{ color: "#333333" }}>ทุกวัน</p>
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
