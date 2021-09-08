import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import '../Style/NewsPage.scss'

const NewsPage = () => {
    const {id} = useParams();
    const [news, setnews] = useState([])
    useEffect(() => {
        fetch(`https://newsportalhj.herokuapp.com/news/${id}`)
        .then(res => res.json())
        .then(data => setnews(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <img src={news.Imageurl} alt="" />
            <h6>Author: {news.Name}</h6>
            <h1> {news.Title}</h1>
            <p>{news.Decryption}</p>
            <Footer></Footer>
        </div>
    );
};

export default NewsPage;