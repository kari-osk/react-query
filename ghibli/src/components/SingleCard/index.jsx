import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

function SingleCard(prop) {
  return (
    <div>
      <Card>
        <Card.Img src={prop.data.image} alt={prop.data.description} />
        <Card.Body>
          <Card.Title className='film_title'>{prop.data.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleCard
