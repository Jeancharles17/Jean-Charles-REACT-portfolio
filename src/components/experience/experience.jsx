import React from 'react'
import './experience.css'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const experience = () => {
  return (
    <section id='experience'>
      <h2>MY Skills</h2>
      <div className="container experience_container">
        <div className="expereince_frontend">
          <h3>Web development</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>HTML</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>CSS</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>REACT</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>Javascript</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <div>
              <h4>Typescript</h4>
              </div>
          
            </article>

          </div>

        </div>
        <div className="experience_backend">
          <h3>Programming and Back-end</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>C++</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>Python</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>MySQL</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>C</h4>

            </article>
            <article className='experience_details'>
              <VscDebugBreakpointData/>
              <h4>Node.js</h4>

            </article>

          </div>

        </div>
      </div>
      
    </section>
  )
}

export default experience