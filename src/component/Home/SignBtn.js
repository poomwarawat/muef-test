import React, {useState}  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const SignBtn = (props) => {
    const {        
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <li><p className="nav-text">
                <Button outline color="light" onClick={toggle}>เข้าสู่ระบบ</Button>
            </p></li>                    
            <li><p className="nav-text">
                <Button color="primary">สมัครสมาชิก</Button>
            </p></li>               
        </div>
    );
}

export default SignBtn;
