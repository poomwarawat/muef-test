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
  rawINH: "",
  rawSHF: "",
  rawEC: "",
  rawWM: "",
  rawPO: "",
  rawISCI: "",
  rawFI: "",
  rawEMI: "",
  rawGEC: "",
};

const CreateReport = () => {
  useEffect(() => {
    fetchReport();
  }, []);
  const [data, setData] = useState(initState);
  const fetchReport = async () => {
    const fetch = await API.get("/admin/report");
    const res = await fetch.data;
    console.log(res);
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
      EC,
      INH,
      PO,
      SHF,
      WM,
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
      rawEC: EC,
      rawINH: INH,
      rawSHF: SHF,
      rawPO: PO,
      rawWM: WM,
      rawISCI: parseInt(INH) + parseInt(EC),
      rawFI: parseInt(SHF) + parseInt(EC),
      rawEMI: parseInt(WM) + parseInt(PO),
      rawGEC:
        parseInt(INH) +
        parseInt(EC) +
        parseInt(WM) +
        parseInt(PO) +
        parseInt(SHF),
      INH: T_SCORE_INH.resultText[1],
      SHF: T_SCORE_SHF.resultText[1],
      EC: T_SCORE_EC.resultText[1],
      WM: T_SCORE_WM.resultText[1],
      PO: T_SCORE_PO.resultText[1],
      ISCI: T_SCORE_ISCI.resultText[1],
      FI: T_SCORE_FI.resultText[1],
      EMI: T_SCORE_EMI.resultText[1],
      GEC: T_SCORE_GEC.resultText[1],
      user: user,
    });
  };
  const csvGenerator = () => {
    const arrObj = [data];
    let csv = JSON2CSV(arrObj).toString();
    // console.log(csv.split('"user"'));
    const header = csv.split('"user"')[0].toString() + '"user"';
    csv = csv.split('"user"')[1];
    const result = header + "\r\n" + csv;
    console.log(result);
    const test = DownloadCSV(result);
    // window.open(`data:text/csv;charset=utf-8,${result}`);
    // arrObj.reduce((acc, curr) => (`${acc}${Object.values(curr).join(",")}\n`), "")
  };
  const DownloadCSV = (csvString) => {
    var blob = new Blob([csvString]);
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, "all_report.csv");
    } else {
      var a = window.document.createElement("a");

      a.href = window.URL.createObjectURL(blob, {
        type: "text/plain",
      });
      a.download = "all_report.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  const JSON2CSV = (objArray) => {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;

    var str = "";
    var line = "";

    // get all distinct keys
    let titles = [];
    for (var i = 0; i < array.length; i++) {
      let obj = array[i];
      Object.entries(obj).forEach(([key, value]) => {
        //console.log('key=', key, "   val=", value );
        if (titles.includes(key)) {
          console.log(key, "exists");
        } else {
          titles.push(key);
        }
      });
    }
    let htext = '"' + titles.join('","') + '"';
    // add to str
    str += htext + "\r\n";
    //
    // lines
    for (var i = 0; i < array.length; i++) {
      var line = "";
      // get values by header order
      for (var j = 0; j < titles.length; j++) {
        // match keys with current header
        let obj = array[i];
        let keyfound = 0;
        // each key/value pair
        Object.entries(obj).forEach(([key, value]) => {
          if (key == titles[j]) {
            // console.log('equal tit=', titles[j] , ' e key ', key ); // matched key with header
            line += ',"' + value + '"';
            keyfound = 1;
            return false;
          }
        });
        if (keyfound == 0) {
          line += ',"' + '"'; // add null value for this key
        } // end loop of header values
      }

      str += line.slice(1) + "\r\n";
    }
    return str;
  };

  return (
    <div>
      <Button onClick={csvGenerator} color="primary">
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
