import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Features from './Features'
import AdminDashboard from './AdminDashboard'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <About/>
        <AdminDashboard/>
    </div>
  )
}

export default Home