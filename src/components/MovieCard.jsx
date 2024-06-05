import React from 'react'
import './MovieCard.css'
import But from './But'
function MovieCard({poster_path,original_title
,vote_average
}) {
  return (
    <div className='moviecard'>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <h3>Title:{original_title}</h3>
      <p>Rating:{vote_average}</p>
      <br />
      <But text={'Play Now'}/>
      <br />
    </div>
  )
}

export default MovieCard
