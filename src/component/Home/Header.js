import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const Header = (props) => {    
    const {        
        className
    } = props;
    const key = localStorage.getItem("key")
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("key")        
        window.location.href = "/"
    }

    const toggle = () => setModal(!modal);  
    const toggle1 = () => setModal1(!modal1);    
    return (
        <div>            
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">MU.EF</label>
                <ul>
                    <li><p className="nav-text">Home</p></li>
                    <li><p className="nav-text">About</p></li>
                    <li><p className="nav-text">Contact</p></li>  
                    {key ? <Button onClick={handleLogout} color="danger">Logout</Button> : <li><Button outline color="light" onClick={toggle}>เข้าสู่ระบบ</Button>{" "}<Button color="light" onClick={toggle1}>สมัครสมาชิก</Button></li>}                    
                </ul>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Sign In</ModalHeader>
                        <ModalBody>
                            <Form action="http://localhost:8080/auth-sign-in" method="POST">
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input name="email" id="email" type="email" placeholder="Enter your email"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input name="password" id="password" type="password" placeholder="Enter your passwprd"/>
                                </FormGroup>                            
                                <Button block color="primary" type="submit">Sign In</Button>
                            </Form>
                        </ModalBody>                    
                </Modal> 

                <Modal isOpen={modal1} toggle={toggle1} className={className}>
                        <ModalHeader toggle={toggle1}>Sign Up</ModalHeader>
                        <ModalBody>
                            <Form action="http://localhost:8080/auth-sign-in" method="POST">
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input name="email" id="email" type="email" placeholder="Enter your email"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input name="password" id="password" type="password" placeholder="Enter your passwprd"/>
                                </FormGroup>                            
                                <Button block color="primary" type="submit">Sign In</Button>
                            </Form>
                        </ModalBody>                    
                </Modal>                
            </nav>
        </div>
    );
}

export default Header;
