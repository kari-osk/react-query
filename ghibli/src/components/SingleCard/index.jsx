import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

function SingleCard(prop) {

  const [isHovering, setIsHovering] = useState(false);

  const handMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <div>
      <Card onMouseOver={handMouseOver} onMouseOut={handleMouseOut}>
        <Card.Img src={prop.data.image} alt={prop.data.description} />
        {isHovering &&
          <Card.Title className='film_title'>{prop.data.title}</Card.Title>
        }

      </Card>
    </div>
  )
}

export default SingleCard
