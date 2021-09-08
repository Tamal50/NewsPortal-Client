import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sliderbanner from '../Component/Sliderbanner';
import Catagorybar from '../Component/Catagorybar';
import Maincontent from '../Component/Maincontent';
import Topcontent from '../Component/Topcontent';
import Footer from '../Component/Footer';

const Home = () => {
    const [catagorynews, setCatagorynews] = useState([])
  const handleClick = (data) => {        
    fetch(`https://newsportalhj.herokuapp.com/News/catagory/${data}`)
    .then(res => res.json())
    .then(data => setCatagorynews(data))
  }
    return (
        <div>
            <Navbar></Navbar>
            <Sliderbanner></Sliderbanner>
            <Catagorybar handleClick={handleClick}></Catagorybar>
            <Maincontent  catagorynews={catagorynews}></Maincontent>
            <Topcontent></Topcontent>
            <Footer></Footer>
        </div>
    );
};

export default Home;