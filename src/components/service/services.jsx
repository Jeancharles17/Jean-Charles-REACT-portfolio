import React from 'react'
import './services.css'

const services = () => {
  return (
    <section id='services'>
        
        <h2>Services</h2>
        <div class="services-container">
            <div class="services-box">
                
                <h3>Web developement</h3>
                <p>Developing and maintaining websites and web applications, using programming languages such as HTML, CSS, JavaScript</p>
                <a class="btn" href="#contact">Contact Me</a>

            </div>
            <div class="services-box">
               
                <h3>System Administartor</h3>
                <p>Managing and maintaining the computer systems, <br /> networks, servers, and other IT infrastructure of an organization.</p>
                <a class="btn" href="#contact">Contact Me</a>

            </div>
            <div class="services-box">
                
                <h3>Database structures</h3>
                <p> Organized and stored data within a database management system irelational, object-oriented, and NoSQL models.</p>
                <a class="btn" href="#contact">Contact Me</a>

            </div>
            <div class="services-box">
                
                <h3>Project Management</h3>
                <p>Planning, organizing, executing, and controlling the resources and tasks required to achieve specific project goals within a defined time frame and budget.</p>
                <a class="btn" href="#contact">Contact Me</a>

            </div>
            <div class="services-box">
                
                <h3>Programming</h3>
                <p>Writing, testing, and maintaining computer programs and software applications, using programming languages such as Java, C, Python, C++ to meet specific project requirements and user needs</p>
                <a class="btn" href="#contact">Contact Me</a>

            </div>

        </div>

    </section>
  )
}

export default services