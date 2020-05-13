import React, {useEffect} from 'react';
import {Row, Col} from 'reactstrap'
import ResultText from './ResultText'
import {Radar} from 'react-chartjs-2';

const OutputResult = (props) => {         

    const results = props.result    
    const gender = results[6].gender
    const birthday = results[7].birthday 
    console.log(results)
    const data = {
        labels: ['INH', 'SHF', 'EC', 'WM', 'PO'],
        datasets: [
          {
            label: 'คะแนนแบบประเมินชุดที่ 101',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [results[0].INH, results[1].SHF, results[2].EC, results[3].WM, results[4].PO],        
          }
        ]
    };   

    var th_gender = ""
    if(gender === "male"){
        th_gender = "ชาย"
    }else{
        th_gender = "หญิง"
    }
    return (
        <div className="result-output">
            {results && <div>
                <h1>ข้อมูลนักเรียน</h1>
                <Row>
                    <Col md={3}>                    
                        <p>ชื่อ : {results[8].firstname} {results[9].lastname}</p>
                    </Col>
                    <Col md={4}>                    
                        <p>เพศ : {th_gender}</p>
                    </Col>
                    <Col md={3}>                    
                        <p>อายุ : {birthday.year} ปี {birthday.month} เดือน {birthday.day} วัน</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>วันเกิด : {results[11].birthdayDate}</p>
                    </Col>
                    <Col md={4}>
                        <p>รหัส : {results[10].codeId}</p>
                    </Col>
                    <Col md={3}>
                        <p>วันที่ประเมิน : {results[12].create}</p>
                    </Col>
                </Row>
                <h1>คะแนนการทำแบบทดสอบ</h1>
                <div className="mt-2 rada-graph">
                    <div>
                        <Radar data={data} />
                    </div>
                </div>
                <div className="mt-3">
                    <p>การหยุด การยับยั้งพฤติกรรม (Inhibitory control) : {results[0].INH} คะแนน</p>                        
                    <p>การเปลี่ยน/ความยืดหยุ่นในการคิด (Shift/Cognitive flexibility) : {results[1].SHF} คะแนน</p>                        
                    <p>การควบคุมอารมณ์ (Emotional control) : {results[2].EC} คะแนน</p>                        
                    <p>ความจำขณะทำงาน (Working memory) : {results[3].WM} คะแนน</p>                        
                    <p>การวางแผนจัดการ (Plan/Organize) : {results[4].PO} คะแนน</p> 
                </div>
                <ResultText result={results}/>                                       
            </div>}
        </div>
    );
}

export default OutputResult;
