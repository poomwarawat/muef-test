import React from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const BacktoMenu = () => {
    return (
        <div>
            <div className="back-menu">
                <div>
                    <Link to="/">
                        <Button color="light" outline>กลับสู่หน้าหลัก</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/ShowStudent/tutorial">
                        <Button color="light">กรอกข้อมูลใหม่</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BacktoMenu;
