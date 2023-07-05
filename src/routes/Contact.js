import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../Hero/Hero';

import contact from '../assets/contacthero.avif'
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Contact/ContactForm';
function Contact() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid "
    heroImg={contact}
    title="Contact Us"
    buttonText="Travel Plan"
    url="/"
    btnClass="hide"

    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact