import React from 'react';
import Start101 from './MUEF101/Start101'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const TestingMenu = (props) => {    
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
                        <Link to="/">
                            <Button color="light" outline>กลับสู่หน้าหลัก</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <Button color="light">บันทึกผลและดูคะแนน</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingMenu;
