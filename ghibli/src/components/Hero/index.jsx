import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Hero() {
  return (
    <div className='hero'>
      <Container>
        <Row >
          <Col sm={12} md={6} lg={6} xl={6} className='hero_text'>
            <h1>Ghibli studio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button>Veja mais</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
