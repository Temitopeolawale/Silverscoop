import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function Movie() {
    const[movie,setMovie]=useState(null)
    
    // fetching movies from moviedb api
    const fetchMovie= async()=>{
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d590f862770dad9c3a4381c086037ec4')

        console.log(response.data)
        setMovie(response.data.results)
       
    }

    useEffect(
        ()=>{
          fetchMovie()
        },
        []
    )
   
  
   
  return (
    <>
    <div style={{
      padding:"40px",
      backgroundColor:"#080805",
      color:"white"
    }}>
      <h1 style={{
        padding:"20px"
      }}>Trending Movies</h1>
    <div >
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
   
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    {movie&&movie.map(u=><MovieCard key={u.id}{...u}/>)}
    
    </Carousel>
    </div>
    </div>
    </>
  )
}

export default Movie
