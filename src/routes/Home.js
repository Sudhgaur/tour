import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../Hero/Hero'
import hero from '../assets/homehero.avif'
import Destination from '../Destination/Destination';
import Trip from '../Trip/Trip';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={hero}
    title="Let's Explore new Places"
    text="Choose your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"

    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home