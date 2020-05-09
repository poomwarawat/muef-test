import React, { useState, useEffect } from 'react';
import {Button, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import API from '../../../API/API'
import WM from './WM';
import PO from './PO';

const Start101 = (props) => {    
    const codeId = props.std.codeId
    const [inh, setINH] = useState(true)
    const [shf, setSHF] = useState(true)
    const [ec, setEC] = useState(true)
    const [wm, setWM] = useState(true)
    const [po, setPO] = useState(true)

    useEffect(() => {        
        API.get(`/get-score-state/${codeId}`)
        .then(res => {          
            if(res.data.INH === false){
                setINH(false)
            }  
            if(res.data.INH === true){
                setINH(true)
                setSHF(false)
            }if(res.data.SHF === true){
                setSHF(true)
                setEC(false)
            }if(res.data.EC === true){
                setEC(true)
                setWM(false)
            }if(res.data.WM === true){
                setWM(true)
                setPO(false)
            }if(res.data.PO === true){
                setPO(true)
            }
        })
    }, [])
    return (
        <div className="mt-4">
            <Container>
                <Link to={`/MUEF-TEST-101/${codeId}/INH`}>
                    <Button id="INH_BTN" disabled={inh} className="w-100 mt-2" color="light">พฤติกรรมด้านการยับยั้ง</Button>
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/SHF`}>
                    <Button id="SHF_BTN" disabled={shf} className="w-100 mt-2" color="light">พัฒนาการด้านการเปลี่ยน/ความยืดหยุ่นในการคิด</Button>
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/EC`}>
                    <Button id="EC_BTN" disabled={ec} className="w-100 mt-2" color="light">พัฒนาการด้านการควบคุมอารมณ์</Button>                    
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/WM`}>
                    <Button id="WM_BTN" disabled={wm} className="w-100 mt-2" color="light">พัฒนาการด้านความจำขณะทำงาน</Button>                    
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/PO`}>
                    <Button id="PO_BTN" disabled={po} className="w-100 mt-2" color="light">พัฒนาการด้านการวางแผนจัดการ</Button>                                    
                </Link>                
            </Container>
        </div>
    );
}

export default Start101;
