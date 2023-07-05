import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import aboutImg from '../assets/abouthero.avif'
import Footer from '../components/Footer/Footer'
import AboutuUs from '../components/About/AboutuUs'
function About() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={aboutImg}
    title="About Us"
    buttonText="Travel Plan"
    url="/"
    btnClass="hide"

    />
    <AboutuUs/>
    <Footer/>
    </>
  )
}

export default About