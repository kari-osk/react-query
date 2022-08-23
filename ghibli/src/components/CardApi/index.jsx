import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../Loading';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './style.css'

const fetchData = () => {
  return axios.get(`https://ghibliapi.herokuapp.com/films`);
}

function CardApi() {
  const { isLoading, data, error } = useQuery('ghibliApi', fetchData)

  if (isLoading) {
    return <Loading />
  }

  if (error) return 'An error has occurred: ' + error.message

  return (

    <Container>
      <Row>
        <Col className="sm-12 md-6 lg-4 xl-4">

          {
            data?.data.map((film) => {
              return (
                <div className='film_card' key={film.title}>
                  <h2>{film.title}</h2>
                  <img src={film.image} alt={film.description} className='film_img' />
                </div>

              )
            })
          }

        </Col>
      </Row>
    </Container>

  )
}

export default CardApi
