import React from 'react'
import { About, Contact, Education, Footer, Header, Projects, Experience } from './containers';
import { ProjectSmall, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <Brand />
          <About />
          <Projects />
          <Footer />
        </div>
    </div>
  )
}

export default App