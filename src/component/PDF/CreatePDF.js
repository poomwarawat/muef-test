import React from "react";
import { Button, Row, Col } from "reactstrap";
import html2pdf from "html2pdf.js";

const CreatePDF = (props) => {
  console.log(props.profile);
  var gender = "";
  if (props.profile[6].gender === "male") {
    gender = "ชาย";
  } else {
    gender = "หญิง";
  }
  const profile = props.profile;
  const pdfGenerator = () => {
    const content = `<div id="pdf-generator">
    <h1>รายงานผลการประเมินชุดที่ ${props.code}</h1>
    <p>ข้อมูลนักเรียน</p>
    <hr />
    <div id="row-data">
      <div>
        <p>ชื่อ : ${profile[8].firstname}</p>
      </div>
      <div>
        <p>นามสกุล : ${profile[9].lastname}</p>
      </div>      
      <div>
        <p>เพศ : ${gender}</p>
      </div>
    </div>
    <div id="row-data">
      <div>
        <p>วันเกิด : ${profile[11].birthdayDate}</p>
      </div>
      <div>
        <p>อายุ : ${profile[7].birthday.year}ปี</p>
      </div>
      <div>
        <p>โรงเรียน : ${profile[13].schoolname}</p>
      </div>
      <div>
        <p>จังหวัด : ${profile[14].province}</p>
      </div>
    </div>
    <hr />
    <div>
      <h1>ผลการประเมิน</h1>
      <div id="pdf-result">
        <div>
          <h3>การหยุด การยับยั้งพฤติกรรม (Inhibitory control)</h3>
          <p>
            ${props.result["T_SCORE_INH"].resultText[0]} ${props.result["T_SCORE_INH"].resultText[1]} ${props.result["T_SCORE_INH"].resultText[2]}
          </p>
        </div>
        <div>
          <h3>
            การเปลี่ยน/ความยืดหยุ่นในการคิด (Shift/Cognitive flexibility)
          </h3>
          <p>
          ${props.result["T_SCORE_SHF"].resultText[0]} ${props.result["T_SCORE_SHF"].resultText[1]} ${props.result["T_SCORE_SHF"].resultText[2]}
          </p>
        </div>
        <div>
          <h3>การควบคุมอารมณ์ (Emotional control)</h3>
          <p>
          ${props.result["T_SCORE_EC"].resultText[0]} ${props.result["T_SCORE_EC"].resultText[1]} ${props.result["T_SCORE_EC"].resultText[2]}
          </p>
        </div>
        <div>
          <h3>ความจำขณะทำงาน (Working memory)</h3>
          <p>
          ${props.result["T_SCORE_WM"].resultText[0]} ${props.result["T_SCORE_WM"].resultText[1]} ${props.result["T_SCORE_WM"].resultText[2]}
          </p>
        </div>
        <div>
          <h3>การวางแผนจัดการ (Plan/Organize)</h3>
          <p>
          ${props.result["T_SCORE_PO"].resultText[0]} ${props.result["T_SCORE_PO"].resultText[1]} ${props.result["T_SCORE_PO"].resultText[2]}
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h1>สรุปผลการประเมิน</h1>
      <p>
      ${props.result["T_SCORE_GEC"].resultText[0]} ${props.result["T_SCORE_GEC"].resultText[1]} ${props.result["T_SCORE_GEC"].resultText[2]}
      </p>
    </div>
    <hr/>
    <a href="#">www.muef-testing.com</a>
  </div>`;

    const opt = {
      margin: 0.3,
      filename: "result_pdf.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Save the PDF
    html2pdf().set(opt).from(content).save();
  };
  return (
    <div>
      <Button onClick={pdfGenerator} color="primary">
        Download PDF
      </Button>
    </div>
  );
};

export default CreatePDF;
