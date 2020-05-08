import React from 'react';
import Header from '../component/Home/Header'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <Header/>
            <div className="not-found-text">
                <h1>404 Not Found</h1>
                <p>ไม่พบหน้าที่ต้องการ <span><Link className="not-found-back" to="/">กลับสู่หน้าหลัก</Link></span></p>
            </div>
        </div>
    );
}

export default NotFound;
