import React from 'react'
import './About.scss'

function About ({
  ...props
}) {

  console.log(props.location.data.largeImageURL);

    return (
      <div className="container-about">
        <div className="container-card container-card-about">
          <img className="image-about" src={props.location.data.largeImageURL} />
          <div className="cardBody">
            <h1 className="login">User name: {props.location.data.user}</h1>
            <h1 className="title">Type: {props.location.data.type}</h1>
            <p className="description">Views: {props.location.data.views}</p>
            <p className="rank-text">Comments: {props.location.data.comments}</p>
            <p className="date-text">Tags: {props.location.data.tags}</p>
            <p className="rank-text">Likes: {props.location.data.likes}</p>
            <p className="rank-text">Downloads: {props.location.data.downloads}</p>
          </div>
        </div>
      </div>
    )
}

export default About;