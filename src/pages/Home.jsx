import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import ClientsSection from '../components/ClientsSection'
import Services from '../components/Services'
import Solution from '../components/Solution'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutUs />
        <ClientsSection />
        <Services />
        <Solution />
    </div>
  )
}

export default Home