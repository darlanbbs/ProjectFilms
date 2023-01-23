import React from 'react'
import { Card,CardGroup,CardImg,CardTitle,CardSubtitle,CardText,CardBody,Button } from 'reactstrap'
import styled from './MovieCard.module.css'
import { Link } from 'react-router-dom'

export const MovieCard = ({movie,showLink = true}) => {
    const imageUrl = import.meta.env.VITE_IMG
  return (
    <CardGroup className={styled.allCards}>
    <Card className={styled.card}>
      <CardImg
        alt={`${movie.title} Poster Image`}
        src={imageUrl + movie.poster_path}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5" className={styled.title}>
          {movie.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
         <i className="bi bi-star-fill"> {movie.vote_average}</i>
        </CardSubtitle>
        <CardText>
          Release: {movie.release_date}<br></br>
          Popularity:{movie.popularity}
        </CardText>
        {showLink && <Link to={`movie/${movie.id}`} className={styled.detailsButton}> 
          Details
        </Link>}
      </CardBody>
    </Card>
  </CardGroup>
  )
}
