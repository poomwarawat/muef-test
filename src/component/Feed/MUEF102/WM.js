import React, { useState, useEffect } from "react";
import Header from "../../Home/Header";
import { Container } from "reactstrap";
import Question from "./Question";
import API from "../../../API/API";

const WM = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    API.get("/GET-WM").then((res) => {
      if (res.data) {
        setQuestion(res.data);
      }
    });
  }, []);
  return (
    <div className="INH-page">
      <Header />
      <Container>
        <div className="test-page">
          <h3>แบบทดสอบพัฒนาด้านความจำขณะทำงาน (WN)</h3>
          <h5>
            ในระยะ 3 เดือนที่ผ่านมาเด็กมีพฤติกรรมต่อไปนี้บ่อยแค่ไหน
            ให้เลือกตอบข้อที่ตรงกับความเป็นจริงมากที่สุด
          </h5>
          <Question question={question} mode="WM" />
        </div>
      </Container>
    </div>
  );
};

export default WM;
