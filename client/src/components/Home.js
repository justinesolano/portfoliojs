import React from 'react'
import Headers from './Headers'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'



const Home = () => {


  return (
    <>
      <div className="top"></div>
      <div className="home">
        <Headers className="headers"/>
        <br />
        <div className="hr-div">
          <hr className="hr"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <About className="about"/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hr-div">
          <hr className="hr-two"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="experience">
          <Experience className="exp"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hr-div">
          <hr className="hr-three"/>
        </div>
        <br />
        <br />
        <br />
        <div className="projects">
          <Projects className="exp"/>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Home
