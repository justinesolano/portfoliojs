import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'


const Contact = () => {
  return (
    <div className="contacts">
      <p className="contact-title">contact</p>
      <div className="ui list contact">
        <div className="item">
          <a href="https://www.linkedin.com/in/justine-solano/" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <FaLinkedin size={50} /></a>
        </div>
        <div className="item">
          <a href="mailto:justinesolano2370@gmail.com" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <HiOutlineMail size={50} /></a> 
        </div>
        <div className="item">
          <a href="https://twitter.com/jsolano_dev" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <AiOutlineTwitter size={50} /></a>
        </div>
        <div className="item">
          <a href="https://github.com/justinesolano" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <AiFillGithub size={50} /></a> 
        </div>
      </div>
      <p className="js"><span>&#169;</span>&nbsp;justinesolano.com</p>
    </div>
  )
}

export default Contact
