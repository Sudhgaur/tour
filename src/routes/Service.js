import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import service from '../assets/servicehero.avif'
import Footer from '../components/Footer/Footer'
import Trip from '../Trip/Trip'
function Service() {
  return (
   <>
   <Navbar/>
   <Hero
    cName="hero-mid service-hero"
    heroImg={service}
    title="Our Services"
    buttonText="Travel Plan"
    url="/"
    btnClass="hide"

    />
    <Trip/>
    <Footer/>
   </>
  )
}

export default Service