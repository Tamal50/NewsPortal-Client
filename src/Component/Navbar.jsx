import React from 'react';
import '../Style/Navbar.scss';
import logo from '../Image/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="logo">
                <img src={logo} alt="" />
           </div>
           <h6>email</h6>
           <div className="admin">
                <h6>Admin</h6>
           </div>
        </div>
    );
};

export default Navbar;