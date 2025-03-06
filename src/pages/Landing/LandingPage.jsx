import React from 'react'
import Header from '../../components/Header'
import HerroPage from '../Perpetual/HerroPage'
import About from '../Stephen/About'
import Explore from '../Elvis/Explore'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <HerroPage />
        <About />
        <Explore/>
        <Footer/>
    </div>
  )
}

export default LandingPage