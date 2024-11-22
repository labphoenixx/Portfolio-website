import React from "react";
import "./HomeCover.css";
import Typewriter from 'typewriter-effect';

const HomeCover = () => {
    return (
        <div className="Home-cover" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 60px)", marginTop: "60px", color: "white" }}>
            <div className="Home-text">
                <Typewriter
                    options={{
                        loop: true, // Enables looping
                        delay: 100, // Typing speed
                        deleteSpeed: 50, // Speed of deletion
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi! I'm Dharshana.")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("I'm a web developer and an ML enthusiast")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Tour through the website to find out more about me!")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Welcome!")
                            .pauseFor(2000)
                            .start();
                        
                    }}
                />
            </div>
        </div>
    );
};


export default HomeCover;