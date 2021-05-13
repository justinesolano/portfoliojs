import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'semantic-ui-react'
import { FaJs } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { SiBulma } from 'react-icons/si'
// // import semantic from '../assets/semantic.png'
import { FaNodeJs } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FiCommand } from 'react-icons/fi'
import { SiHeroku } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import { FaTrello } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'

const About = () => {
  return (
    <div className="ui divided grid">
      <h1 className="about-title">about</h1>
      <br />
      <div className="one column row">
        <div className="column">
          <div className="icons">
            <FontAwesomeIcon icon={faLaptopCode} className="icons fa-3x"/>
            <FontAwesomeIcon icon={faPen} className="icons fa-3x"/>
            <FontAwesomeIcon icon={faGamepad} className="icons fa-3x"/>
          </div>
          <p className="about-me">Hello, my name is Justine! I am a junior full-stack developer & knowledge enthusiast. I live in London and enjoy watching films, listening to music, and travelling.
            <br />
            <br />
    I first got into coding in 2015 when I discovered an app called Episode which allows you to create a visual and interactive version of your story through code. This allowed me to marry two of my favourite hobbies: writing and creating. As a multipotentialite who, as Frederickson et al. described, is someone who <i>&quot;when provided with appropriate environments, can select and develop a number of competencies to a high level&quot;</i>, I truly feel that being a developer is one of these competencies.
            <br />
            <br />
    I love learning and progressing in places that I am passionate about. After graduating university, coding was the only thing that excited me. Enrolling to the Software Engineering course at GA was where I truly felt that I could pursue this. 
            <br />
            <br />
    Outside of being a developer, I love writing and have been doing it since I was young. I have been working on a coming-of-age novel since 2016. I am currently writing/coding an original fantasy story with 12 published chapters and over 9000 reads. You can check it out <a href="http://episodeinteractive.com/s/6014349999407104" className="episode">here</a> on your phone!
            <br />
            <br />
    I also love playing video games. My favourite games to play are Overwatch, Valheim, Minecraft, and my favourite RPG&apos;s are Skyrim and Witcher 3. I am also a master at Tetris.
          </p>
        </div>
      </div>
      <div className="two column row">
        <div className="column">
          <p className="development">development</p>
          <Card.Group itemsPerRow={5}>
            <div className="name">
              <FaHtml5 size={65} className="icon"/>
              <p className="names">HTML</p>
            </div>
            <div className="name">
              <FaCss3Alt size={65} className="icon" />
              <p className="names">CSS</p>
            </div>
            <div className="name">
              <FaJs size={65} className="icon" /> 
              <p className="names">JavaScript</p>
            </div>
            <div className="name">
              <FaReact size={65} className="icon" />
              <p className="names">React</p>
            </div>
            <div className="name">
              <FaSass size={65} className="icon" />
              <p className="names">SASS</p>
            </div>
            <div className="name">
              <SiBulma size={65} className="icon" />
              <p className="names">Bulma</p>
            </div>
            <div className="name">
              <FaNodeJs size={65} className="icon" />
              <p className="names">Node.js</p>
            </div>
            <div className="name">
              <SiMongodb size={65} className="icon" /> 
              <p className="names">MongoDB</p>
            </div>
            <div className="name">
              <FaPython size={65} className="icon" />
              <p className="names">Python</p>
            </div>
            <div className="name">
              <SiDjango size={65} className="icon" />
              <p className="names">Django</p>
            </div>
            <div className="name">
              <SiPostgresql size={65} className="icon" />
              <p className="names">PostgreSQL</p>
            </div>
          </Card.Group>
        </div>
        <div className="column" id="management-column">
          <p className="management">management & design</p>
          <Card.Group itemsPerRow={5}>
            <div className="name">
              <FaGithub size={65} className="icon" />
              <p className="names">GitHub</p>
            </div>
            <div className="name">
              <SiVisualstudiocode size={65} className="icon" />
              <p className="names">VSCode</p>
            </div>
            <div className="name">
              <FiCommand size={65} className="icon" />
              <p className="names">CLI</p>
            </div>
            <div className="name">
              <SiHeroku size={65} className="icon" />
              <p className="names">Heroku</p>
            </div>
            <div className="name">
              <SiNetlify size={65} className="icon" />
              <p className="names">Netlify</p>
            </div>
            <div className="name">
              <DiPhotoshop size={65} className="icon" /> 
              <p className="names">Photoshop</p>
            </div>
            <div className="name">
              <FaTrello size={65} className="icon" />
              <p className="names">Trello</p>
            </div>
          </Card.Group>
        </div>
      </div>
    </div>
  )
}

export default About


{/* <div className="column">
<p className="management">management & design</p>
<Card.Group itemsPerRow={5}>
  <FaGithub size={65} className="icon" />
  <SiVisualstudiocode size={65} className="icon" />
  <FiCommand size={65} className="icon" />
  <SiHeroku size={65} className="icon" />
  <SiNetlify size={65} className="icon" />
  <DiPhotoshop size={65} className="icon" /> 
  <FaTrello size={65} className="icon" />
</Card.Group>
</div> */}