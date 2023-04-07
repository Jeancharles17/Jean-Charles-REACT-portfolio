import React from 'react'
import './about.css'
import ME from '../../assets/about.jpeg'

const About = () => {
  return (
   <section id='about'>
    <h5>
      let's connect
    </h5>
    <h2>
      About Me
    </h2>
    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-img'>
          <img src={ME} alt="" />

        </div>

      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <h5>
              Experience
            </h5>
            <small>2 years</small>

          </article>
          <article className='about_card'>
            <h5>
              Projects
            </h5>
            <small>20+</small>

          </article>
          <article className='about_card'>
            <h5>
              Degress
            </h5>
            
            <small>Computer Science</small><br />
            <small>Communication studies</small>
  

          </article>

        </div>
        <p>
        From the sunny shores of south Florida, I am a Software Engineer and data scientist with an insatiable passion for innovation. My love for engineering started at a young age, as I marveled at the potential of technology to make a difference in people's lives. As I grew older, I realized that I wanted to use my skills to make a positive impact on the world. Today, I am on a mission to bring cutting-edge technology to the masses, by creating mobile applications and building robust database structures that can power the next big thing.

My journey in the world of engineering has been a fascinating one, with many twists and turns along the way. But through it all, my goal has remained the same: to inspire a new generation of engineers to create technologies that bring us closer together and improve our way of living. With each new challenge that I encounter, I am reminded of the incredible potential of technology to transform our world, and I am more motivated than ever to make a real difference. So join me on this journey, as we work together to build a brighter future for all!
        </p>
        <a href="#contact" className='btn'>Contact Me</a>

      </div>

    </div>
   </section>
  )
}

export default About