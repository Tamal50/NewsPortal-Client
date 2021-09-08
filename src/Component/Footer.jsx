import React from 'react';
import '../Style/Footer.scss'
import google from '../Image/google-play-badge.png';
import apple from '../Image/pngegg.png'
import logo from '../Image/logo.png';

const Footer = () => {
    return (
        <div className="Footer" id="Footer">
        <div className="container">
            <div className="left">
                <img src={google} alt="" />
                <img src={apple} alt="" />
            </div>
            <div className="right">
                <img src={logo} alt="" />
            </div>
            
        </div>
        <p>* For all kind of breaking news download our app</p>
    </div>
    );
};

export default Footer;