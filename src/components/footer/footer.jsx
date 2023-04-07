import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jean</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer-socials'>
        <a href="https://www.linkedin.com/in/jean-charles-8310b8208" target="_blank"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/jc_cooll/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Jeancharles17" target="_blank"><BsGithub/></a>
        <a href="tel:+17863022917"><BsFillTelephoneFill/></a>

      </div>
      <div className='copy_right'>
        <small>&copy; Jean Charles. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer