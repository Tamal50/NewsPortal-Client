import React, { useEffect, useState } from "react";
import Catagorybar from "./Catagorybar";
import Newsbox from "./Newsbox";


const Maincontent = (props) => {
  const {catagorynews} = props;

  const [news, setnews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/News')
    .then((response) => response.json())
    .then((result) => setnews(result))
  }, [])
 
  let news11 
    if (catagorynews == false) {
      news11 = news.map((news) =><div className="col-sm-3 col-md-6"> <Newsbox news={news}></Newsbox></div>)
    }else {
      news11 = catagorynews.map((news) =><div className="col-sm-3 col-md-6"> <Newsbox news={news}></Newsbox></div>)     
    }    

  return (
    <div>
      <div className="Maincontent row">
        {news11}
    </div>
    </div>
  );
};

export default Maincontent;
