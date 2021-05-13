import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import ScrollIntoView from 'react-scroll-into-view'
import geometry from '../assets/geometry.png'


const Sidebar = () => {
  return (
    <Menu>
      <div className="item">
        <ScrollIntoView selector=".top">
          <img src={geometry} alt="home" style={{ height: '30px' }} className="geometry nav-item"></img>
        </ScrollIntoView>
      </div>
      <div className="item" id="burger-item" style={{ color: 'white' }}>
        <ScrollIntoView selector=".hr">
            about
        </ScrollIntoView>
      </div>
      <div className="item" id="burger-item" style={{ color: 'white' }}>
        <ScrollIntoView selector=".hr-two">
            experience
        </ScrollIntoView>
      </div>
      <div className="item" id="burger-item" style={{ color: 'white' }}>
        <ScrollIntoView selector=".hr-three">
      projects
        </ScrollIntoView>
      </div>
      <div className="item" id="burger-item" style={{ color: 'white' }}>
        <ScrollIntoView selector=".contact-title">
      contact
        </ScrollIntoView>
      </div>
    </Menu>
  )
}

export default Sidebar
