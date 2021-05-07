import React from 'react'
import j from '../assets/j.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>about</li>
        <li>skills</li>
        <li>experience</li>
        <li><img src={j} alt="home"></img></li>
      </ul>
    </nav>
  )
}

export default Navbar
