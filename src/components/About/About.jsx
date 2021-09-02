import React from 'react'
import './About.scss'
import Card from 'react-bootstrap/Card';

function About ({
  ...props
}) {
    return (
      <div className="container-about">
        <Card>
          <Card.Img variant="top" src={props.location.data.largeImageURL} />
          <Card.Body>
            <Card.Title>User name: {props.location.data.user}</Card.Title>
            <Card.Text>
              Type: {props.location.data.type}
            </Card.Text>
            <Card.Text>
              Views: {props.location.data.views}
            </Card.Text>
            <Card.Text>
              Comments: {props.location.data.comments}
            </Card.Text>
            <Card.Text>
              Tags: {props.location.data.tags}
            </Card.Text>
            <Card.Text>
              Likes: {props.location.data.likes}
            </Card.Text>
            <Card.Text>
              Downloads: {props.location.data.downloads}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default About;