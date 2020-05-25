import React, { useState, useEffect } from "react";
import API from "../../API/API";
import { Row, Col, Button } from "reactstrap";
import { Radar } from "react-chartjs-2";

const ResultText = (props) => {
  const result = props.result;
  const INH = result[0].INH;
  const SHF = result[1].SHF;
  const EC = result[2].EC;
  const WM = result[3].WM;
  const PO = result[4].PO;
  const gender = result[6].gender;
  const age = result[7].birthday.year;
  const [resultText, setResultText] = useState([]);
  if (resultText.length > 0) {
    // console.log(resultText[0]);
    var data = {
      labels: ["INH", "SHF", "EC", "WM", "PO"],
      datasets: [
        {
          label: "คะแนนแบบประเมินชุดที่ 101 5 ด้าน",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [
            resultText[0]["T_SCORE_INH"].score,
            resultText[0]["T_SCORE_SHF"].score,
            resultText[0]["T_SCORE_EC"].score,
            resultText[0]["T_SCORE_WM"].score,
            resultText[0]["T_SCORE_PO"].score,
          ],
        },
      ],
    };
    var data_1 = {
      labels: ["ISCI", "FI", "EMI"],
      datasets: [
        {
          label: "คะแนนแบบประเมินชุดที่ 101 3 ด้าน",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [
            resultText[0]["T_SCORE_ISCI"].score,
            resultText[0]["T_SCORE_FI"].score,
            resultText[0]["T_SCORE_EMI"].score,
          ],
        },
      ],
    };
  }

  useEffect(() => {
    if (props.code === 102) {
      API.get(
        `/get-result-score-102/${INH}/${SHF}/${EC}/${WM}/${PO}/${gender}/${age}`
      ).then((res) => {
        if (res.data) {
          setResultText(resultText.concat(res.data));
        }
      });
    } else {
      API.get(
        `/get-result-score/${INH}/${SHF}/${EC}/${WM}/${PO}/${gender}/${age}`
      ).then((res) => {
        if (res.data) {
          setResultText(resultText.concat(res.data));
        }
      });
    }
  }, []);
  return (
    <div>
      <h1>
        เด็กมีคะแนนพัฒนาการทักษะด้านการคิดเชิงบริหาร (EF) แยกรายด้าน 5
        ด้านดังนี้
      </h1>
      <div className="mt-2 rada-graph">
        <div>
          <Radar data={data} />
        </div>
      </div>
      {resultText.length !== 0 &&
        resultText.map((result, index) => {
          return (
            <div className="mt-3" key={index}>
              <Row className="topic-result">
                <Col md={6}>
                  <h3 className="topic-result">หัวข้อ</h3>
                </Col>
                <Col md={6}>
                  <h3 className="topic-result">ผลประเมิน</h3>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p>การหยุด การยับยั้งพฤติกรรม (Inhibitory control)</p>
                </Col>
                <Col md={6}>
                  <p>
                    {resultText[0]["T_SCORE_INH"]["resultText"][1]}{" "}
                    {resultText[0]["T_SCORE_INH"]["resultText"][2]}
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    การเปลี่ยน/ความยืดหยุ่นในการคิด (Shift/Cognitive
                    flexibility)
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    {resultText[0]["T_SCORE_SHF"]["resultText"][1]}{" "}
                    {resultText[0]["T_SCORE_SHF"]["resultText"][2]}
                  </p>
                </Col>
                <Col md={6}>
                  <p>การควบคุมอารมณ์ (Emotional control)</p>
                </Col>
                <Col md={6}>
                  <p>
                    {resultText[0]["T_SCORE_EC"]["resultText"][1]}{" "}
                    {resultText[0]["T_SCORE_EC"]["resultText"][2]}
                  </p>
                </Col>
                <Col md={6}>
                  <p>ความจำขณะทำงาน (Working memory)</p>
                </Col>
                <Col md={6}>
                  <p>
                    {resultText[0]["T_SCORE_WM"]["resultText"][1]}{" "}
                    {resultText[0]["T_SCORE_WM"]["resultText"][2]}
                  </p>
                </Col>
                <Col md={6}>
                  <p>การวางแผนจัดการ (Plan/Organize)</p>
                </Col>
                <Col md={6}>
                  <p>
                    {resultText[0]["T_SCORE_PO"]["resultText"][1]}{" "}
                    {resultText[0]["T_SCORE_PO"]["resultText"][2]}
                  </p>
                </Col>
              </Row>
            </div>
          );
        })}
      <div>
        <h1>
          เด็กมีคะแนนตัวบ่งชี้
          พัฒนาการด้านพฤติกรรมที่ส่งผลต่อการกำกับตนเองไปสู่เป้าหมาย ดังนี้
        </h1>
        <div className="mt-2 rada-graph">
          <div>
            <Radar data={data_1} />
          </div>
        </div>
        <Row className="topic-result mt-3">
          <Col md={6}>
            <h3 className="topic-result">หัวข้อ</h3>
          </Col>
          <Col md={6}>
            <h3 className="topic-result">ผลประเมิน</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>ด้านการยับยั้งควบคุมตนเอง (Inhibitory Self-Control)</p>
          </Col>
          <Col md={6}>
            <p>
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_ISCI"]["resultText"][1]}{" "}
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_ISCI"]["resultText"][2]}
            </p>
          </Col>
          <Col md={6}>
            <p>ด้านการคิดยืดหยุ่น (Cognitive Flexibility)</p>
          </Col>
          <Col md={6}>
            <p>
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_FI"]["resultText"][1]}{" "}
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_FI"]["resultText"][2]}
            </p>
          </Col>
          <Col md={6}>
            <p>ด้านพุทธิปัญญา (Metacognition)</p>
          </Col>
          <Col md={6}>
            <p>
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_EMI"]["resultText"][1]}{" "}
              {resultText.length > 0 &&
                resultText[0]["T_SCORE_EMI"]["resultText"][2]}
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <div className="text-center mt-2">
          <h1>สรุปผลประเมิน</h1>
        </div>
        <Row>
          <Col md={6}>
            {resultText.length > 0 && (
              <div>
                <p>{resultText[0]["T_SCORE_GEC"]["resultText"][1]} </p>
                <p>{resultText[0]["T_SCORE_GEC"]["resultText"][2]} </p>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResultText;
