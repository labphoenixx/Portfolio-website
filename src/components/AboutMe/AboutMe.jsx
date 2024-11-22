import React from 'react'
import './AboutMe.css'
import my_img from '../../assets/linked_in_dp_sd.jpg'
import Typewriter from 'typewriter-effect'

const AboutMe = () => {
  return (
    <div className='about'>
        <div className="abtLeft">
            <img src={my_img} alt="My photo was there :(" />
        </div>
        <div className="abtRight">
            <h1>About Me: S Dharshana</h1>
            <p>In today's world, rapidly transforming due to AI and advanced tech, I wish to offer practical 
                solutions to people. I create systems that are simple to use, intuitive and impactful.</p>
            <p> Hi, I'm S Dharshana, a tech enthusiast who has set her eyes on web development and machine learning. 
            I'm a dual degree student majoring in Physics and Computer science Engineering. I've worked on 
            projects like a career guidance system, a music recommendation system [ongoing] and web apps that
             ease your life.</p>
            <p> I'm looking for opportunities to apply my skills to solve challenges and grow.
                   Let's connect to see how I can be a valuable addition to your team!</p>
            <div className='unique'>
            <Typewriter
                options={{
                    loop: true, 
                    delay: 50, 
                    deleteSpeed: 40,
                }}
                onInit={(typewriter)=>
                    {
                        typewriter.typeString("I'm a problem-solver")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm a passionate learner")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm a student of BITS Pilani, Hyderabad Campus")
                        .pauseFor(1000)
                        .start()
                    }
                }
            />
            </div>
        </div>
    </div>
  )
}

export default AboutMe
