import React, {useState} from 'react';
import './Card.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Cards ({
  image,
  likes,
  tags,
  comments,
  item,
}) {
  let tagsArr = tags.split(',')

    return (
      <div className="container-card">
        <Card>
          <div className="container-image">
          <Link 
              className="link-about"
              to={{
                pathname: `/about/${item.id}`,
                data: item,
              }}
            >
            </Link>
            <Card.Img className="image" variant="top" src={image}/>
          </div>
          <Card.Body>
            <Card.Text>
              Likes: {likes}
            </Card.Text>
            <Card.Text>
              Comments: {comments}
            </Card.Text>
            <Card.Text>
              Tags:
                {tagsArr.map(item => (
                  <>
                    <span className="tags-span">{item}</span>
                  </>
                ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Cards;
