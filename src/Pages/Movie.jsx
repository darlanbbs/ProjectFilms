import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

import { MovieCard } from '../Components/MovieCard'

import styled from './Movie.module.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url)
    
    const data = await res.json()
  
    setMovies(data)
    console.log(movies)
 };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);
  
  return (
    <div className='container'>
      {movies && (
        <div className={styled.card}>
          <div className={styled.leftSide}>
            <MovieCard movie={movies} showLink={false} key={movies.id}/>
          </div>
          <div className={styled.rightSide}>
            <div className={styled.title}>{movies.title}</div>
            <div className={styled.tagline}>{movies.tagline}</div>
            <p>{movies.overview}</p>
            <h2 className={styled.duration}>Duration:{movies.runtime} minutes</h2>
            <h2 className={styled.budget}>Budget:{Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(Number(movies.budget))}</h2>
            <h2 className={styled.revenue}>Revenue:{Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(Number(movies.revenue))}</h2>
          </div>
        </div>


      )}    
      
    </div>
  )
}
