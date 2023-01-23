import React from 'react'
import { useState,useEffect } from 'react'
import { MovieCard } from '../Components/MovieCard'
import styled from './Home.module.css'

const urlMovies = import.meta.env.VITE_API
const keyMovies = import.meta.env.VITE_API_KEY


export const Home = () => {
const [topMovies,setTopMovies] = useState([{}])

async function topRatedMovies(url){
  
  const res = await fetch(url)
  
  const data = await res.json()


  setTopMovies(data.results)
}

useEffect(() => {
  
  const betterMovies = `${urlMovies}top_rated?${keyMovies}`
  topRatedMovies(betterMovies)
}, [])

  return (
    <div className={styled.container_fluid}>
       <div className={styled.filterType}>
        Better Movies:
       </div>
       <div className={styled.listFilms}>

       {topMovies.length === 0 && <p className={styled.loading}></p>}
      {topMovies.length > 0 && topMovies.map((movie)=> (
        <ul>
          <li>
             <MovieCard key={movie.id} movie={movie} />
          </li>
        </ul>
        ))}
       </div>
    </div>
  )
}
