import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'
import Experience from './components/experience/experience'
import About from './components/about/About'
import Services from './components/service/services'



const App = () => {
    return(
        <>
        
        <Header />
       
        
        <Nav />
     
        
        <About />
        
        <Experience />

        <Services />

        <Portfolio />
        <Contact />
      
        <Footer />
       
        </>

    )
}

export default App