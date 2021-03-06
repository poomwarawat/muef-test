import React, { useState, useEffect } from "react";
import API from "../../API/API";
import { Row, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";
import CreatePDF from "../PDF/CreatePDF";

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
    var data = {
      labels: ["INH", "SHF", "EC", "WM", "PO"],
      chartArea: {
        backgroundColor: "rgba(251, 85, 85, 0.4)",
      },
      datasets: [
        {
          label: "แบบประเมิน 5 ด้าน",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
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
          label: "แบบประเมิน 3 ด้าน",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
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
      <h3>
        เด็กมีคะแนนพัฒนาการทักษะด้านการคิดเชิงบริหาร (EF) แยกรายด้าน 5
        ด้านดังนี้
      </h3>
      <div className="mt-2 rada-graph">
        <div>
          <Bar
            data={data}
            width={10}
            height={300}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              tooltips: {
                displayColors: false,
                titleFontSize: 16,
                bodyFontSize: 14,
                xPadding: 10,
                yPadding: 10,
                callbacks: {
                  label: (tooltipItem, data) => {
                    return `${tooltipItem.value}`;
                  },
                },
              },
            }}
          />
        </div>
      </div>
      {resultText.length !== 0 &&
        resultText.map((result, index) => {
          return (
            <div className="mt-3" key={index}>
              <Row className="topic-result">
                <Col md={6}>
                  <h5 className="topic-result">หัวข้อ</h5>
                </Col>
                <Col md={6}>
                  <h5 className="topic-result">ผลประเมิน</h5>
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
        <h3>
          เด็กมีคะแนนตัวบ่งชี้
          พัฒนาการด้านพฤติกรรมที่ส่งผลต่อการกำกับตนเองไปสู่เป้าหมาย ดังนี้
        </h3>
        <div className="mt-2 rada-graph">
          <div>
            <Bar
              data={data_1}
              width={10}
              height={300}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                tooltips: {
                  displayColors: false,
                  titleFontSize: 16,
                  bodyFontSize: 14,
                  xPadding: 10,
                  yPadding: 10,
                  callbacks: {
                    label: (tooltipItem, data) => {
                      return `${tooltipItem.value}`;
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <Row className="topic-result mt-3">
          <Col md={6}>
            <h5 className="topic-result">หัวข้อ</h5>
          </Col>
          <Col md={6}>
            <h5 className="topic-result">ผลประเมิน</h5>
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
          <h3>สรุปผลประเมิน</h3>
        </div>
        <Row>
          <Col md={12}>
            {resultText.length > 0 && (
              <div>
                {console.log(resultText[0]["T_SCORE_GEC"]["resultText"])}
                <p>
                  {resultText[0]["T_SCORE_GEC"]["resultText"][0]}{" "}
                  {resultText[0]["T_SCORE_GEC"]["resultText"][1]}{" "}
                  {resultText[0]["T_SCORE_GEC"]["resultText"][2]}
                </p>
              </div>
            )}
          </Col>
        </Row>
      </div>
      {resultText.length > 0 && (
        <CreatePDF
          result={resultText[0]}
          profile={result}
          code={props.code}
          graph1={data}
          graph2={data_1}
        />
      )}
    </div>
  );
};

export default ResultText;
