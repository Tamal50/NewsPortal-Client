import React, { useEffect, useState } from 'react';
import Newsbox from './Newsbox';

const Topcontent = () => {
    const [news, setnews] = useState([])
    useEffect(() => {
      fetch('https://newsportalhj.herokuapp.com/News')
      .then((response) => response.json())
      .then((result) => setnews(result))
    }, [])
    return (
        <div>
            <h1>Top Content</h1>
            {
                news.slice(0,3).map((news) => <Newsbox news={news}></Newsbox>)
            }
        </div>
    );
};

export default Topcontent;