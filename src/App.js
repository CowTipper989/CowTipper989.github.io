import React from 'react'

import { About, Contact, Education, Footer, Header, Projects, Experience } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Education />
        <Projects />
        <Contact />
        <Experience />
        <CTA />
        <About />
        <Footer />
    </div>
  )
}

export default App