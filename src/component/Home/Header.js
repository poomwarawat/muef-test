import React from 'react';

const Header = () => {
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
                    <li><p className="nav-text">Services</p></li>
                    <li><p className="nav-text">Contact</p></li>
                    <li><p className="nav-text">Feedback</p></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
