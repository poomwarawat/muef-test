import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../API/API";

const ResultBtn = (props) => {
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

  return (
    <div>
      {score !== false ? (
        <div></div>
      ) : (
        <Link to={`${props.url}`}>ผลประเมิน</Link>
      )}
    </div>
  );
};

export default ResultBtn;
