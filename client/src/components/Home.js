import React from 'react'
import Headers from './Headers'
import About from './About'



const Home = () => {


  return (
    <div className="home">
      <Headers className="headers"/>
      <br />
      <div className="hr-div">
        <hr className="hr"/>
      </div>
      <br />
      <br />
      <br />
      <About className="about"/>
      <br />
      <div className="hr-div">
        <hr className="hr-two"/>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
