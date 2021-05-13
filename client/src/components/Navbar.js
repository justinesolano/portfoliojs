import React, { useState, useEffect } from 'react'
import geometry from '../assets/geometry.png'
import ScrollIntoView from 'react-scroll-into-view'
import Sidebar from './Sidebar'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}


const Navbar = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log('WINDOW DIMENSION', windowDimensions)



  return (
    <>
      { windowDimensions. width > 850 ?
        <nav className="ui centered grid aligned fixed menu navbar">
          <div className="ui centered grid secondary menu">
            <div className="item" style={{ color: 'white' }}>
              <ScrollIntoView selector=".hr">
            about
              </ScrollIntoView>
            </div>
            <div className="item" style={{ color: 'white' }}>
              <ScrollIntoView selector=".hr-two">
            experience
              </ScrollIntoView>
            </div>
            <div className="item">
              <ScrollIntoView selector=".top">
                <img src={geometry} alt="home" style={{ height: '40px' }} className="geometry nav-item"></img>
              </ScrollIntoView>
            </div>
            <div className="item" style={{ color: 'white' }}>
              <ScrollIntoView selector=".hr-three">
      projects
              </ScrollIntoView>
            </div>
            <div className="item" style={{ color: 'white' }}>
              <ScrollIntoView selector=".contact-title">
      contact
              </ScrollIntoView>
            </div>
          </div>
        </nav>
        :
        <div id="App">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
          <div id="page-wrap">
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
