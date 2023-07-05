import './ContactformStyle.css';

import React from 'react'

function ContactForm() {
  return (
    <div className="form-container">
        <h1>Send a message to us !</h1>
        <form>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea placeholder='message' rows="8"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm