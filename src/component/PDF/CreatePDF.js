import React, { useEffect } from "react";
import { Button, Table } from "reactstrap";
import html2pdf from "html2pdf.js";
import { Bar } from "react-chartjs-2";

const CreatePDF = (props) => {
  const { graph3, graph2 } = props;
  console.log(graph3, graph2);
  var gender = "";
  if (props.profile[6].gender === "male") {
    gender = "ชาย";
  } else {
    gender = "หญิง";
  }
  const profile = props.profile;
  const pdfGenerator = () => {
    const content = `<div id="pdf-generator">
    <p id="topicpdf">
      รายงานผลการประเมินพัฒนาการ MU.EF ชุดที่ ${props.code}
    </p>
    <p>ข้อมูลนักเรียน</p>
    <hr />
    <table>
        <thead  id="colortableheade">
          <tr>
            <th  id="colortable">ชื่อ</th>
            <th id="colortable">นามสกุล</th>
            <th id="colortable">เพศ</th>
            <th id="colortable">วันเกิด</th>
            <th id="colortable">อายุ</th>
            <th id="colortable">โรงเรียน</th>
            <th id="colortable">จังหวัด</th>
          </tr>
        </thead>
        <tbody  id="colortable">
          <tr>
            <td  id="colortable">${profile[8].firstname}</td>
            <td id="colortable">
            ${profile[9].lastname}             
            </td>
            <td id="colortable">${gender}</td>
            <td id="colortable">
            ${profile[11].birthdayDate}          
            </td>
            <td id="colortable">
            ${profile[7].birthday.year}        
            </td>
            <td id="colortable">
            ${profile[13].schoolname}          
            </td>
            <td id="colortable">
            ${profile[14].province}           
            </td>            
          </tr>          
        </tbody>
      </table>    
    <hr />
    <div>
    <p id="topicpdf">ผลการประเมิน</p>
      <table>
        <thead  id="colortableheade">
          <tr>
            <th  id="colortable">หัวข้อ</th>
            <th>ผลการประเมิน</th>
          </tr>
        </thead>
        <tbody  id="colortable">
          <tr>
            <td  id="colortable">การหยุด การยับยั้งพฤติกรรม (Inhibitory control)</td>
            <td>
              ${props.result["T_SCORE_INH"].resultText[0]} 
              ${props.result["T_SCORE_INH"].resultText[1]} 
              ${props.result["T_SCORE_INH"].resultText[2]}
            </td>
          </tr>
          <tr  id="colortable">
            <td  id="colortable">
              การเปลี่ยน/ความยืดหยุ่นในการคิด (Shift/Cognitive flexibility)
            </td>
            <td>
              ${props.result["T_SCORE_SHF"].resultText[0]} 
              ${props.result["T_SCORE_SHF"].resultText[1]} 
              ${props.result["T_SCORE_SHF"].resultText[2]}
            </td>
          </tr>
          <tr  id="colortable">
            <td  id="colortable">การควบคุมอารมณ์ (Emotional control)</td>
            <td>
              ${props.result["T_SCORE_EC"].resultText[0]} 
              ${props.result["T_SCORE_EC"].resultText[1]} 
              ${props.result["T_SCORE_EC"].resultText[2]}
            </td>
          </tr>
          <tr  id="colortable">
            <td  id="colortable">ความจำขณะทำงาน (Working memory)</td>
            <td>
              ${props.result["T_SCORE_WM"].resultText[0]} 
              ${props.result["T_SCORE_WM"].resultText[1]} 
              ${props.result["T_SCORE_WM"].resultText[2]}
            </td>
          </tr>
          <tr  id="colortable">
            <td id="colortable">การวางแผนจัดการ (Plan/Organize)</td>
            <td>
              ${props.result["T_SCORE_PO"].resultText[0]} 
              ${props.result["T_SCORE_PO"].resultText[1]} 
              ${props.result["T_SCORE_PO"].resultText[2]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div>
    <p id="topicpdf">สรุปผลการประเมิน</p>
      <p>
        ${props.result["T_SCORE_GEC"].resultText[0]} 
        ${props.result["T_SCORE_GEC"].resultText[1]} 
        ${props.result["T_SCORE_GEC"].resultText[2]}
      </p>
    </div>
    <hr />
    <a href="#">www.muef-testing.com</a>
  </div>`;

    const opt = {
      margin: 0.75,
      filename: "result_pdf.pdf",
      image: { type: "png", quality: 4 },
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
