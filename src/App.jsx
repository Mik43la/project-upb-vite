import { useState } from 'react'

import logo from "./images/logo.svg"
import tourUno from "./images/tour-1.jpeg"
import tourDos from "./images/tour-2.jpeg"
import tourTres from "./images/tour-3.jpeg"
import tourCuatro from "./images/tour-4.jpeg"
import lmao from "./images/about.jpeg"
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import OurServices from './components/OurServices'
import Tours from './components/Tours'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>

    <Hero></Hero>

    <About></About>

    <OurServices></OurServices>
    
    <Tours></Tours>

    <Footer></Footer>
    </>
  )
}

export default App
