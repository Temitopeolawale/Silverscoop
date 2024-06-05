import React from 'react'
import './Navigation.css'
function Navigation() {
  return (
    <div>
      <header>
        <div className="logo">
            <h1>SILVERSCOOP</h1>
            <div className="div"></div>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Shop</li>
                <li>Cinema</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
