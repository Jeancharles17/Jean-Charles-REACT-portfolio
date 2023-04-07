import React from 'react'
import CA from '../../assets/updated_res.pdf'

const CV = () => {
  return (
    <div className='cta'>
    <a href={CA} download className='btn'>Dowload CV</a>
    <a href="#contact" className='btn'>Contact Me</a>

    </div>
  )
}

export default CV