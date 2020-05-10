import React, {useState, useEffect} from 'react';
import API from '../../API/API'
import {Row, Col, Button} from 'reactstrap'

const ResultText = (props) => {
    const result = props.result
    const INH = result[0].INH
    const SHF = result[1].SHF
    const EC = result[2].EC
    const WM = result[3].WM
    const PO = result[4].PO
    const gender = result[6].gender
    const age = result[7].birthday.year
    const [resultText, setResultText] = useState([])        

    useEffect(() => {
        API.get(`/get-result-score/${INH}/${SHF}/${EC}/${WM}/${PO}/${gender}/${age}`)
        .then(res => {
            if(res.data){
                setResultText(resultText.concat(res.data))
            }
        })
    },[])
    return (
        <div>
            <h1>เด็กมีคะแนนพัฒนาการทักษะด้านการคิดเชิงบริหาร (EF) แยกรายด้าน 5 ด้านดังนี้</h1>
            { resultText.length !== 0 && resultText.map((result, index) => {                               
                return(
                    <div key={index}>
                        <Row className="topic-result">
                            <Col md={6}>
                                <h3 className="topic-result">หัวข้อ</h3>
                            </Col>
                            <Col md={6}>
                                <h3 className="topic-result">ผลประเมิน</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>การหยุด การยับยั้งพฤติกรรม (Inhibitory control)</p>
                            </Col>
                            <Col md={6}>
                                <p>{resultText[0]['T_SCORE_INH']['resultText'][1]} {resultText[0]['T_SCORE_INH']['resultText'][2]}</p>
                            </Col>
                            <Col md={6}>
                                <p>การเปลี่ยน/ความยืดหยุ่นในการคิด (Shift/Cognitive flexibility)</p>
                            </Col>
                            <Col md={6}>
                                <p>{resultText[0]['T_SCORE_SHF']['resultText'][1]} {resultText[0]['T_SCORE_SHF']['resultText'][2]}</p>
                            </Col>
                            <Col md={6}>
                                <p>การควบคุมอารมณ์ (Emotional control)</p>
                            </Col>
                            <Col md={6}>
                                <p>{resultText[0]['T_SCORE_EC']['resultText'][1]} {resultText[0]['T_SCORE_EC']['resultText'][2]}</p>
                            </Col>
                            <Col md={6}>
                                <p>ความจำขณะทำงาน (Working memory)</p>
                            </Col>
                            <Col md={6}>
                                <p>{resultText[0]['T_SCORE_WM']['resultText'][1]} {resultText[0]['T_SCORE_WM']['resultText'][2]}</p>
                            </Col>
                            <Col md={6}>
                                <p>การวางแผนจัดการ (Plan/Organize)</p>
                            </Col>
                            <Col md={6}>
                                <p>{resultText[0]['T_SCORE_PO']['resultText'][1]} {resultText[0]['T_SCORE_PO']['resultText'][2]}</p>
                            </Col>
                        </Row>
                    </div>
                )
            })}            
        </div>
    );
}

export default ResultText;
