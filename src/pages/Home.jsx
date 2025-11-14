import React from 'react'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import Testimonials from '../components/Testimonials'
import BusinessDetail from '../components/BusinessDetail'
const Home = () => {
  return (
    <div>
      <Hero/>
      <TrustedBrands />
      <BusinessDetail/>
      <Testimonials />
    </div>
  )
}

export default Home
