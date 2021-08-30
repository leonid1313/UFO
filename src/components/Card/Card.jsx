import React, {useState} from 'react';
import './Card.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Card ({
  image,
  likes,
  tags,
  comments,
  item,
}) {

  console.log(tags);
  
  let tagsArr = tags.split(',')

    return (
      <div className="container-card">
        <div className="container-image">
        <Link 
            className="link-about"
            to={{
              pathname: `/about/${item}`,
              data: item,
            }}
          >
          </Link>
          <img className="image" src={image} />
        </div>
        <div className="cardBody">
          <div>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <p>Tags:
              {tagsArr.map(item => (
            <>
              <span className="tags-span">{item}</span>
            </>
          ))}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Card
