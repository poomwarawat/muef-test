import React from 'react';
import {Table, Button} from 'reactstrap'
import {Link} from 'react-router-dom'


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
                    {console.log(props.std)}                   
                    {props.std.map((student, index) => {
                        return(
                            <tr key={index}>                                
                                <th scope="row">{index + 1}</th>
                                <td>{student.codeId}</td>
                                <td>{student.fname} {student.lname}</td>
                                <td>
                                    <Link to={`/MUEF-TEST-101/${student.codeId}`}>
                                        <Button color="primary">ประเมิน</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/">ผลประเมิน</Link>
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
