import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='withTitle'>
        <h1>Contact Me</h1>
        <div className='contact'>
            <div className="col">
                <h2>Get in Touch!</h2>
                <p>Reach out to me via this form or contact me using the contact info below. </p>
                <ul>
                    <li>sdharshana26@gmail.com</li>
                    <li>+91 77953 77665</li>
                    <li>BITS Pilani, Hyderabad Campus</li>
                </ul>
            </div>

            <div className="col">
                <form action="https://formsubmit.co/sdharshana26@gmail.com" method="POST">
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name [required]' required/>
                    <label>Phone Number</label>
                    <input type="teL" name='phone' placeholder='Enter your phone/mobile number [required]' required/>
                    <label>Your Email</label>
                    <input type="email" name='email' placeholder='Enter your email address[required]' required/>
                    <label>Write your message</label>
                    <textarea name="message" rows="6" placeholder='Have a message? Type it here! [required]' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
            </div>
      
        </div>
        <h7>Made by S Dharshana</h7>
    </div>
  )
}

export default Contact
