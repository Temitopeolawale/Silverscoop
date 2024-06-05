import React from 'react'
import './LandingHero.css'
function LandingHero() {
  return (
    <div>
      <div className="left">
        <footer>
            <div className="logo">
                <h1>SILVERSCOOP</h1>
            </div>
            <div className="lanv">
                <h3>company</h3>
                <br />
                <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Shop</li>
                <li>Cinema</li>
            </ul>
            </div>
            <div className="watch">
                <h3>Watch Free</h3>
                <br />
                <ul>
                    <li>what to watch</li>
                    <li>tv show finder </li>
                    <li>A23 collection</li>
                </ul>
            </div>
        </footer>
        <div className='rights'>
        <p>&copy; 2024. All rights reserved.</p>
        <br />
        </div>
      </div>
    </div>
  )
}

export default LandingHero
