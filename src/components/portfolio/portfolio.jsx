import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/work (1).jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Latest Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt="1" />
            

          </div>
          <h3>Jean First Website</h3>
          <div className='portfolio_item_cta'>
          <a href="https://jeancharles.dreamhosters.com/" target='_blank' className='btn'>Link</a>
          <a href="#" target='_blank' className='btn'>GitHub</a>

          </div>
        </article>
        
      </div>
    </section>
  )
}

export default portfolio