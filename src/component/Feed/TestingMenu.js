import React, {useState, useEffect} from 'react';
import Start101 from './MUEF101/Start101'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import API from '../../API/API'

const TestingMenu = (props) => {  
    const url = window.location.href
    const urlnew = url.split("/")
    
    const [result, setResult] = useState(true)
    const codeId = urlnew[4]
    useEffect(() => {        
        API.get(`/get-state-result/${codeId}`)
        .then(res => {
            if(res.data.result){
                setResult(false)                
            }
        })
    }, [])

    return (
        <div>
            {props.std && <h3>สวัสดีคุณ {props.username} ขณะนี้คุณกำลังทำแบบประเมินของ {props.std.fname} {props.std.lname} ชุดที่ {props.test}</h3>}            
            <div>
                {props.std && <Start101 std={props.std}/>}
                <div className="mt-4">
                    <h3>คำชี้แจง</h3>
                    <p>เริ่มทำแบบประเมินจากหัวข้อแรก เมื่อทำหัวข้อแรกเสร็จจึงสามารถทำหัวข้อต่อไปได้</p>
                </div>
                <div className="back-menu">
                    <div>
                        <Link to="/ShowStudent/MUEF101">
                            <Button color="light" outline>ย้อนกลับ</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/MUEF-TEST-101/${codeId}/result`}>
                            <Button disabled={result} color="light">บันทึกผลและดูคะแนน</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingMenu;
