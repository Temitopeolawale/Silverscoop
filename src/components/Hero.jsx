import React from 'react'
import './Hero.css'
import But from './But'
function Hero() {
  return (
    <div className='hero' style={{
        backgroundImage:"URl('https://www.plex.tv/wp-content/uploads/2024/01/Watch-Free-Hero-2048x1152-3-1800x1013.png')",
    }}>
      <div className="writeups">
      <h1>Discover Your Next <br/> Favorite Movie</h1>
      <br/>
      <p>Explore thousands of movies, reviews,<br/> and more. lets help you find the perfect movie to watch</p>
    <br/>
      <But text={'Watch Now'}/>
      </div>
     
    </div>
  )
}

export default Hero
