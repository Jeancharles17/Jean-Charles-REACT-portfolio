import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Headersocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/jean-charles-8310b8208" target="_blank"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/jc_cooll/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Jeancharles17" target="_blank"><BsGithub/></a>
        <a href="tel:+17863022917"><BsFillTelephoneFill/></a>
    
        
    </div>
  )
}

export default Headersocial