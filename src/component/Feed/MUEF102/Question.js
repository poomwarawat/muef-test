import React, { useState, Suspense } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, Alert } from "reactstrap";
import SpinComp from "../../SpinComp";
import API from "../../../API/API";
const QuestionBox = React.lazy(() => import("./QuestionBox"));

const Question = (props) => {
  const url = window.location.href;
  const urlnew = url.split("/");

  var questionNumber = 0;
  if (props.mode === "INH") {
    questionNumber = 10;
  } else if (props.mode === "SHF") {
    questionNumber = 5;
  } else if (props.mode === "EC") {
    questionNumber = 5;
  } else if (props.mode === "PO") {
    questionNumber = 6;
  } else if (props.mode === "WM") {
    questionNumber = 6;
  }
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    if (props.mode === "PO") {
      return <Redirect to={`/MUEF-TEST-102/${urlnew[4]}?mode=PO`} />;
    } else {
      return <Redirect to={`/MUEF-TEST-102/${urlnew[4]}`} />;
    }
  }

  const handleSave = () => {
    const arrScore = [];
    const allscore = props.score.score;
    for (let index = 0; index < questionNumber; index++) {
      const value = Object.values(allscore[index]);
      arrScore.push(parseInt(value));
    }
    if (Math.min(...arrScore) === -1) {
      setError("กรุณาตอบแบบประเมินให้ครบทุกข้อก่อนบันทึก");
    } else {
      var total = 0;
      arrScore.forEach((element) => {
        total += element;
      });
      const Score = new FormData();
      Score.append("score", total);
      Score.append("mode", props.mode);
      Score.append("codeId", urlnew[4]);
      API.post("/send-score-102", Score).then((res) => {
        if (res.data.add === true) {
          setRedirect(true);
        }
      });
    }
  };
  return (
    <div>
      <Suspense fallback={<SpinComp />}>
        {props.question &&
          props.question.map((question, index) => {
            return (
              <div key={index}>
                <QuestionBox
                  question={question}
                  mode={props.mode}
                  index={index}
                />
              </div>
            );
          })}
      </Suspense>
      {error && <Alert color="danger">{error}</Alert>}
      <div className="back-menu">
        <div>
          <Link to={`/MUEF-TEST-101/${urlnew[4]}`}>
            <Button color="light" outline>
              ย้อนกลับ
            </Button>
          </Link>
        </div>
        <div>
          <Button onClick={handleSave} color="light">
            บันทึกผล
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { score: state };
};

export default connect(mapStateToProps)(Question);
