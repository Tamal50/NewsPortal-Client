import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/Newsbox.scss'

const Newsbox = (props) => {
  const {Title,  Imageurl , _id} = props.news
  console.log(Title)
    return (
        <div>
            <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Imageurl} />
          <Card.ImgOverlay className="title">
           <Link to={"/readmore/"+_id}> <Card.Title style={{ color: "rgb(255, 255, 255)"}}>{Title}</Card.Title></Link>
            {/* <button style={{ textAlign: "center" }}>See more</button> */}
          </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default Newsbox;