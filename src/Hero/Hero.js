import './HeroStyle.css'
import React from 'react';
// import hero from '../assets/homehero.avif'

function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img src={props.heroImg} alt="imghero" />
        <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
          </a>
        </div>
    </div>
    </>
  )
}

export default Hero