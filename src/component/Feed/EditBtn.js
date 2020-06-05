import React, { useState, useEffect } from "react";
import API from "../../API/API";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const EditBtn = (props) => {
  var typeTest = props.type;
  const codeId = props.codeId;
  const [score, setScore] = useState(null);
  useEffect(() => {
    if (typeTest === 101) {
      API.get(`/check-total-score/${codeId}`).then((res) => {
        if (res.data.result) {
          setScore(false);
        } else {
          setScore(true);
        }
      });
    } else if (typeTest === 102) {
      API.get(`/check-total-score-102/${codeId}`).then((res) => {
        if (res.data.result) {
          setScore(false);
        } else {
          setScore(true);
        }
      });
    }
  }, []);
  const renderbtn = () => {
    if (score === true) {
      return <div></div>;
    }
    if (score !== false) {
      return <div>Loading...</div>;
    } else {
      return (
        <Link to={`${props.url}`}>
          <Button color="danger">แก้ไข</Button>
        </Link>
      );
    }
  };
  return <div>{renderbtn()}</div>;
};

export default EditBtn;
