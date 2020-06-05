import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import EstimateBtn from "../EstimateBtn";
import ResultBtn from "../ResultBtn";
import EditBtn from "./EditBtn";

const ShowTable = (props) => {
  return (
    <div>
      <h1>รายชื่อนักเรียนที่กรอกข้อมูลแบบฟอร์ม MU.EF {props.testCode}</h1>
      <div className="table-bg">
        <Table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>รหัสนักเรียน</th>
              <th>ชื่อ-นามสกุล</th>
              <th>แบบประเมิน</th>
              <th>ผลประเมิน</th>
              <th>แก้ไขข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {props.std.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.codeId}</td>
                  <td>
                    {student.fname} {student.lname}
                  </td>
                  <td>
                    <EstimateBtn
                      type={props.testCode}
                      codeId={student.codeId}
                      url={`/MUEF-TEST-${props.testCode}/${student.codeId}`}
                    />
                  </td>
                  <td>
                    <ResultBtn
                      codeId={student.codeId}
                      type={props.testCode}
                      url={`/MUEF-TEST-${props.testCode}/${student.codeId}/result`}
                    />
                  </td>
                  <td>
                    <EditBtn
                      codeId={student.codeId}
                      type={props.testCode}
                      url={`/edit-data/${student.codeId}`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShowTable;
