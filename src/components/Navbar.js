import React from 'react'
import j from '../assets/j.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <p>about</p>
        <p>skills</p>
        <p>experience</p>
        <p><img src={j} alt="home"></img></p>
        <p>projects</p>
        <p>contact me</p>
      </div>
    </nav>
  )
}

export default Navbar
