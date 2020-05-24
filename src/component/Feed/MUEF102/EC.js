import React, { useState, useEffect } from "react";
import Header from "../../Home/Header";
import { Container } from "reactstrap";
import Question from "./Question";
import API from "../../../API/API";

const EC = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    API.get("/GET-EC-102").then((res) => {
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
          <h1>แบบทดสอบพัฒนาด้านการควบคุมอารมณ์ (EC)</h1>
          <h3>
            ในระยะ 3 เดือนที่ผ่านมาเด็กมีพฤติกรรมต่อไปนี้บ่อยแค่ไหน
            ให้เลือกตอบข้อที่ตรงกับความเป็นจริงมากที่สุด
          </h3>
          <Question question={question} mode="EC" />
        </div>
      </Container>
    </div>
  );
};

export default EC;
