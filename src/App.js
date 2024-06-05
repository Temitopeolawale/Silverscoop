import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Movie from './components/Movie';
import TvShows from './components/TvShows';
import LandingHero from './components/LandingHero';


function App() {
  

  return (
    <>
    {/* adding the navigation bar */}
    <Navigation/>
    {/* adding the hero section */}
    <Hero/>
    {/* the movie api */}
    
     <Movie/>
   {/* adding tv show api */}
    <TvShows/>
    {/* adding the landing page */}
    <LandingHero/>
    </>
  );
}

export default App;
