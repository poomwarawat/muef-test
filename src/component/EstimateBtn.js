import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../API/API";

const EstimateBtn = (props) => {
  var typeTest = props.type;
  const codeId = props.codeId;
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (typeTest === 101) {
      const api = () =>
        API.get(`/check-total-score/${codeId}`).then((res) => {
          if (res.data.result === false) {
            setScore(false);
          }
        });
      api();
    } else if (typeTest === 102) {
      const api = () =>
        API.get(`/check-total-score-102/${codeId}`).then((res) => {
          if (res.data.result === false) {
            setScore(false);
          }
        });
      api();
    }
  }, []);

  return (
    <div>
      {score !== false ? (
        <div></div>
      ) : (
        <Link to={`${props.url}`}>
          <Button color="primary">ประเมิน</Button>
        </Link>
      )}
    </div>
  );
};

export default EstimateBtn;
