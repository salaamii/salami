import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects'


function App() {

  return (

    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
} 

 

export default App
