import React from 'react'
import {Header} from './Components/Header'
import Home from './Components/Home'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/contact" element = {<Contact/>}/>
      <Route path= "/about" element = {<About/>}/>
    </Routes> 
    <About/>
    <Contact/>
    </BrowserRouter>
  )
}

export default App