import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../Loading';
import { Container, Row, Col } from 'react-bootstrap'
import SingleCard from '../SingleCard';
import './style.css'

const fetchData = () => {
  return axios.get(`https://ghibliapi.herokuapp.com/films`);
}

function Gallery() {
  const { isLoading, data, error } = useQuery('ghibliApi', fetchData)

  if (isLoading) {
    return <Loading />
  }

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Container>
      <Row mb={2}>
        {
          data?.data.map((film) => (
            <Col sm={12} md={6} lg={3} xl={3} key={film.title}>
              <SingleCard data={film} />
            </Col>
          ))}
      </Row>
    </Container>

  )
}

export default Gallery
