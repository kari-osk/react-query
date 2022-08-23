import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../Loading';
import './style.css'

const fetchData = () => {
  return axios.get(`https://ghibliapi.herokuapp.com/films`);
}

function Card() {
  const { isLoading, data, error } = useQuery('ghibliApi', fetchData)

  if (isLoading) {
    return <Loading />
  }

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {
        data?.data.map((film) => {
          return (
            <div className='film_card'>
              <h2>{film.title}</h2>
              <img src={film.image} alt={film.description} className='film_img' />
            </div>
          )
        })
      }
    </div>
  )
}

export default Card
