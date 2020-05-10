import React from 'react';
import {Table, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import EstimateBtn from '../EstimateBtn'
import ResultBtn from '../ResultBtn'

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
                    <th>หมายเหตุ*</th>
                    </tr>
                </thead>
                <tbody>                                      
                    {props.std.map((student, index) => {
                        return(
                            <tr key={index}>                                
                                <th scope="row">{index + 1}</th>
                                <td>{student.codeId}</td>
                                <td>{student.fname} {student.lname}</td>
                                <td>
                                    <EstimateBtn codeId={student.codeId} url={`/MUEF-TEST-${props.testCode}/${student.codeId}`}/>                                 
                                </td>
                                <td>
                                    <ResultBtn codeId={student.codeId} url={`/MUEF-TEST-101/${student.codeId}/result`}/>                                    
                                </td>
                                <td></td>
                            </tr> 
                        )
                    })}                                       
                </tbody>
                </Table>
                </div>
        </div>
    );
}

export default ShowTable;
