import React from 'react'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../Components/MovieCard'
import styled from './Search.module.css'

const search = import.meta.env.VITE_SEARCH
const key = import.meta.env.VITE_API_KEY

export const Search = () => {

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");


  async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }
  
  useEffect(() => {
    const searchWithQueryURL = `${search}?${key}&query=${query}`;
    getMovies(searchWithQueryURL);
  }, [query]);
  return (
    <div className={styled.container}>
       <div className={styled.filterType}>
       Results for: <span className={styled.title}> {query}</span>
       </div>
      <div className={styled.container_fluid}>
       {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
    </div>
  )
}
