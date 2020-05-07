import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import API from '../../API/API'

let userInit = {
    firstname : "",
    lastname : "",
    username : "",
    password : "",
    repassword : ""
}

const Header = (props) => {    
    const {        
        className
    } = props;
    const key = localStorage.getItem("key")
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)    
    const [user, setUser] = useState(userInit)
    const [error, setError] = useState("")

    const handleLogout = () => {
        localStorage.removeItem("key")        
        window.location.href = "/"
    }

    const toggle = () => setModal(!modal);  
    const toggle1 = () => setModal1(!modal1);    
       
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.id
        setUser({ ...user, [name] : value})
    }
    const handleRegis = () => {           
        const Data = new FormData()
        Data.append("firstname", user.firstname)
        Data.append("lastname", user.lastname)
        Data.append("username", user.username)
        Data.append("password", user.password)
        Data.append("repassword", user.repassword)   
        API.post(`/register`, Data)
        .then(res => {
            if(res.data.error){
                setError(res.data.error)
            }
            if(res.data.regis === true){
                window.location.reload()
            }            
        })
    }
    
    return (
        <div id="nav">            
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">
                    <Link className="logo-name" to="/">
                        <img src="https://med.mahidol.ac.th/nursing/sites/default/files/public/download/logo/Logo-Mahidol.png" width="70px" height="70px"/>
                        <span>  MU.EF</span>
                    </Link>
                </label>
                <ul>
                    <Link to="/" style={{color:"white"}}>
                        <li><p className="nav-text">Home</p></li>
                    </Link>
                    <li><p className="nav-text">About</p></li>
                    <li><p className="nav-text">Contact</p></li>  
                    {key ? <Button onClick={handleLogout} color="danger">Logout</Button> : <li><Button outline color="light" onClick={toggle}>เข้าสู่ระบบ</Button>{" "}<Button color="light" onClick={toggle1}>สมัครสมาชิก</Button></li>}                    
                </ul>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>เข้าสู่ระบบ</ModalHeader>
                        <ModalBody>
                            <Form action="http://localhost:8080/auth-sign-in" method="POST">
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input name="username" id="email" type="text" placeholder="กรุณาใส่ชื่อผู้ใช้งาน"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input name="password" id="password" type="password" placeholder="กรุณาใส่พาสเวิร์ด"/>
                                </FormGroup>        
                                {error && <Alert color="danger">{error}</Alert>  }                      
                                <Button block color="primary" type="submit">Sign In</Button>
                            </Form>
                        </ModalBody>                    
                </Modal> 

                <Modal isOpen={modal1} toggle={toggle1} className={className}>
                        <ModalHeader toggle={toggle1}>สมัครสมาชิก</ModalHeader>
                        <ModalBody>
                            <Form>                                
                                <FormGroup>
                                    <Label htmlFor="firstname">ชื่อ</Label>
                                    <Input onChange={handleChange} name="firstname" id="firstname" type="text" placeholder="กรุณาใส่ชื่อ"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastname">นามสกุล</Label>
                                    <Input onChange={handleChange} name="lastname" id="lastname" type="text" placeholder="กรุณาใส่นามสกุล"/>
                                </FormGroup>       
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input onChange={handleChange} name="username" id="username" type="text" placeholder="กรุณาใส่ username (ความยาวมมากว่า 6 อักษร)"/>
                                </FormGroup>      
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input onChange={handleChange} name="password" id="password" type="password" placeholder="กรุณาใส่ password (ความยาวมากกว่า 8 อักษร)"/>
                                </FormGroup>      
                                <FormGroup>
                                    <Label htmlFor="password">Re-Password</Label>
                                    <Input onChange={handleChange} name="repassword" id="repassword" type="password" placeholder="กรุณาใส่ password อีกครั้ง (ความยาวมากกว่า 8 อักษร)"/>
                                </FormGroup>   
                                {error && <Alert color="danger">{error}</Alert>  }                       
                                <Button block color="primary" type="button" onClick={handleRegis}>สมัครสมาชิก</Button>
                            </Form>
                        </ModalBody>                    
                </Modal>                
            </nav>
        </div>
    );
}

export default Header;
