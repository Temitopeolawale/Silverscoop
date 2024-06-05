import React from 'react'
import But from './But'
import './TvShowCard.css'
function TvShowsCard({original_name,vote_average,poster_path}) {
  return (
    <div className='tvshows'>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <h3>Title: {original_name}</h3>
      <p>Rating: {vote_average}</p>
      <br />
      <But text={'Play Now'}/>
      <br/>
    </div>
  )
}

export default TvShowsCard
