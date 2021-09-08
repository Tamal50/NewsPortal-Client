import React, { useEffect, useState } from 'react';
import '../Style/Catagorybar.scss'

const Catagorybar = (props) => {
   
    return (
        <div className="Catagorybar">
            <ul>
                <li onClick={() => props.handleClick("Sport")} >Sport</li>
                <li onClick={() => props.handleClick("Entertainment")} >Entertainment</li>
                <li onClick={() => props.handleClick("Political")} >Political</li>
                <li onClick={() => props.handleClick("Business")} >Business</li>
            </ul>
        </div>
    );
};

export default Catagorybar;