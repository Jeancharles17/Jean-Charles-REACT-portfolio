import React from 'react'
import './header.css'
import CV from './CV'
import ME from '../../assets/jean.jpg'
import HeaderSocial from './headerSocial'

const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello my name is</h5>
        <h1>Jean Charles</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CV />
        <HeaderSocial />
        <div className='me'>
        <img src={ME} alt="jean" />
        </div>
      </div>
    </header>
  )
}

export default header