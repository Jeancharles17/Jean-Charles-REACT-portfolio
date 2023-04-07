import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jp4x6po', 'template_idnl1sg', form.current, 'P4uSS7XyjDlDMdqQF')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Let's Connect</h5>
      <h2>Contact</h2>
      <div className="container contact_container" >
        <div className='contact_options'>
          <article className="contact_option">
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>mussetcharles@yahoo.com</h5>
            <a href="mailto:mussetcharles@yahoo.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <AiFillInstagram className='contact_icon'/>
            <h4>Istagram</h4>
            <h5>jc_cooll</h5>
            <a href="https://www.instagram.com/jc_cooll/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className='contact_icon'/>
            <h4>LinkedIn</h4>
            <h5>Jean Charles</h5>
            <a href="https://www.linkedin.com/in/jean-charles-8310b8208" target='_blank'>Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" id="" cols="" rows="7" placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact