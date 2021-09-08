import React from 'react';
import { Card } from 'react-bootstrap';

const Newsbox = (props) => {
  const {Title,  Imageurl} = props.news
  console.log(Title)
    return (
        <div>
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Imageurl} />
          <Card.ImgOverlay>
            <Card.Title>{Title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default Newsbox;