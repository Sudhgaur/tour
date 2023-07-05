import './FooterStyle.css'
import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="top">
            <div>
                <h1>Adventure & Explore</h1>
                <p>choose your favrouit destination</p>
            </div>
            <div>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-behance-square'></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Treks by Session</h4>
                <a href="/">Spring</a>
                <a href="/">Summer</a>
                <a href="/">Monsoon</a>
                <a href="/">Autumn</a>
                <a href="/">Winter</a>
            </div>
            <div>
                <h4>Treks by Difficulty</h4>
                <a href="/">Easy - Moderate</a>
                <a href="/">Moderate</a>
                <a href="/">Moderate - Difficult</a>
                <a href="/">Difficult</a>
            </div>
            <div>
                <h4>Treks by Region</h4>
                <a href="/">Uttarakhand</a>
                <a href="/">Himanchal</a>
                <a href="/">Nepal</a>
                
            </div>
            <div>
                <h4>Contact Us</h4>
                <a href="/">6398012953</a>
                <a href="/">Mon to Sat - 9.30 AM to 7.30 PM</a>
                <a href="/">Sun - 9.30 AM to 5.00 PM</a>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer