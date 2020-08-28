import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import API from "../../API/API";
import html2pdf from "html2pdf.js";

let initState = {
  fname: "",
  lname: "",
  nname: "",
  gender: "",
  birthday: "",
  salary: "",
  stdCode: "",
  stdRoom: "",
  schoolname: "",
  region: "",
  district: "",
  province: "",
  create_time: "",
  user: "",
  INH: "",
  SHF: "",
  EC: "",
  WM: "",
  PO: "",
  ISCI: "",
  FI: "",
  EMI: "",
  GEC: "",
};

const CreateReport = () => {
  useEffect(() => {
    fetchReport();
  }, []);
  const [data, setData] = useState(initState);
  const fetchReport = async () => {
    const fetch = await API.get("/admin/report");
    const res = await fetch.data;
    const data = res.data;
    const score = res.allScore;
    const {
      T_SCORE_INH,
      T_SCORE_SHF,
      T_SCORE_EC,
      T_SCORE_WM,
      T_SCORE_PO,
      T_SCORE_ISCI,
      T_SCORE_FI,
      T_SCORE_EMI,
      T_SCORE_GEC,
    } = score;
    const {
      fname,
      lname,
      nname,
      gender,
      birthday,
      salary,
      stdCode,
      stdRoom,
      schoolname,
      region,
      district,
      province,
      create_time,
      user,
    } = data;
    setData({
      fname: fname,
      lname: lname,
      nname: nname,
      gender: gender,
      birthday: new Date(birthday),
      salary: salary,
      stdCode: stdCode,
      stdRoom: stdRoom,
      schoolname: schoolname,
      region: region,
      district: district,
      province: province,
      create_time: new Date(create_time),
      user: user,
      INH: T_SCORE_INH.resultText[1],
      SHF: T_SCORE_SHF.resultText[1],
      EC: T_SCORE_EC.resultText[1],
      WM: T_SCORE_WM.resultText[1],
      PO: T_SCORE_PO.resultText[1],
      ISCI: T_SCORE_ISCI.resultText[1],
      FI: T_SCORE_FI.resultText[1],
      EMI: T_SCORE_EMI.resultText[1],
      GEC: T_SCORE_GEC.resultText[1],
    });
  };

  const pdfGenerator = () => {
    const content = `<div id="pdf-generator">   
    <table>
          <thead id="colortableheade">
            <tr>
            <th id="colortable">ชื่อ</th>
              <th id="colortable">นามสกุล</th>
              <th id="colortable">ชื่อเล่น</th>
              <th id="colortable">เพศ</th>
              <th id="colortable">วันเกิด</th>
              <th id="colortable">เงินเดือน</th>
              <th id="colortable">เลขที่</th>
              <th id="colortable">เลขห้อง</th>
              <th id="colortable">โรงเรียน</th>
              <th id="colortable">ตำบล</th>
              <th id="colortable">อำเภอ</th>
              <th id="colortable">จังหวัด</th>
              <th id="colortable">คุณครู</th>
              <th id="colortable">วันที่ประเมิน</th>
              <th id="colortable">INH</th>
              <th id="colortable">SHF</th>
              <th id="colortable">EC</th>
              <th id="colortable">WM</th>
              <th id="colortable">PO</th>
              <th id="colortable">ISCI</th>
              <th id="colortable">FI</th>
              <th id="colortable">EMI</th>
              <th id="colortable">GEC</th>
            </tr>
          </thead>
          <tbody id="colortable">
            <tr>
              <td id="colortable">${data.fname}</td>
              <td id="colortable">${data.lname}</td>
              <td id="colortable">${data.nname}</td>
              <td id="colortable">${data.gender}</td>
              <td id="colortable">${data.birthday.getDay()}/${
      parseInt(data.birthday.getMonth()) + 1
    }/${parseInt(data.birthday.getFullYear()) + 543}</td>
              <td id="colortable">${data.salary}</td>
              <td id="colortable">${data.stdCode}</td>
              <td id="colortable">${data.stdRoom}</td>
              <td id="colortable">${data.schoolname}</td>
              <td id="colortable">${data.region}</td>
              <td id="colortable">${data.district}</td>
              <td id="colortable">${data.province}</td>
              <td id="colortable">${data.user}</td>
              <td id="colortable">${data.create_time.getDay()}/${
      parseInt(data.create_time.getMonth()) + 1
    }/${parseInt(data.create_time.getFullYear()) + 543}</td>
              <td id="colortable">${data.INH}</td>
              <td id="colortable">${data.SHF}</td>
              <td id="colortable">${data.EC}</td>
              <td id="colortable">${data.WM}</td>
              <td id="colortable">${data.PO}</td>
              <td id="colortable">${data.ISCI}</td>
              <td id="colortable">${data.FI}</td>
              <td id="colortable">${data.EMI}</td>
              <td id="colortable">${data.GEC}</td>
            </tr>
          </tbody>
        </table> 
  </div>`;

    const opt = {
      margin: 0.75,
      filename: "report.pdf",
      image: { type: "png", quality: 4 },
      html2canvas: { scale: 1 },
      jsPDF: {
        orientation: "landscape",
        unit: "mm",
        format: "a1",
        putOnlyUsedFonts: true,
        floatPrecision: 16, // or "smart", default is 16
      },
    };

    // Save the PDF
    html2pdf().set(opt).from(content).save();
  };
  return (
    <div>
      <Button onClick={pdfGenerator} color="primary">
        ดาวน์โหลดรายงาน
      </Button>
      {/* {data.fname !== "" && (
        <table>
          <thead id="colortableheade">
            <tr>
              <th id="colortable">ชื่อ</th>
              <th id="colortable">นามสกุล</th>
              <th id="colortable">ชื่อเล่น</th>
              <th id="colortable">เพศ</th>
              <th id="colortable">วันเกิด</th>
              <th id="colortable">เงินเดือน</th>
              <th id="colortable">เลขที่</th>
              <th id="colortable">เลขห้อง</th>
              <th id="colortable">โรงเรียน</th>
              <th id="colortable">ตำบล</th>
              <th id="colortable">อำเภอ</th>
              <th id="colortable">จังหวัด</th>
              <th id="colortable">คุณครู</th>
              <th id="colortable">วันที่ประเมิน</th>
              <th id="colortable">INH</th>
              <th id="colortable">SHF</th>
              <th id="colortable">EC</th>
              <th id="colortable">WM</th>
              <th id="colortable">PO</th>
              <th id="colortable">ISCI</th>
              <th id="colortable">FI</th>
              <th id="colortable">EMI</th>
              <th id="colortable">GEC</th>
            </tr>
          </thead>
          <tbody id="colortable">
            <tr>
              <td id="colortable">{data.fname}</td>
              <td id="colortable">{data.lname}</td>
              <td id="colortable">{data.nname}</td>
              <td id="colortable">{data.gender}</td>
              <td id="colortable">{data.birthday}</td>
              <td id="colortable">{data.salary}</td>
              <td id="colortable">{data.stdCode}</td>
              <td id="colortable">{data.stdRoom}</td>
              <td id="colortable">{data.schoolname}</td>
              <td id="colortable">{data.region}</td>
              <td id="colortable">{data.district}</td>
              <td id="colortable">{data.province}</td>
              <td id="colortable">{data.user}</td>
              <td id="colortable">{data.create_time}</td>
              <td id="colortable">{data.INH}</td>
              <td id="colortable">{data.SHF}</td>
              <td id="colortable">{data.EC}</td>
              <td id="colortable">{data.WM}</td>
              <td id="colortable">{data.PO}</td>
              <td id="colortable">{data.ISCI}</td>
              <td id="colortable">{data.FI}</td>
              <td id="colortable">{data.EMI}</td>
              <td id="colortable">{data.GEC}</td>
            </tr>
          </tbody>
        </table>
      )} */}
    </div>
  );
};

export default CreateReport;
