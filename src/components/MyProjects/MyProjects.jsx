import React from 'react'
import './MyProjects.css';
import p1 from "../../assets/Project-1.png";
import p2 from "../../assets/Project-2.png";
import p3 from "../../assets/Project-3.png";
import p4 from "../../assets/Project-4.png";
import p5 from "../../assets/Project-5.png";

const MyProjects = () => {
  return (
    <div className='projWithTitle'>
        <h1>My Projects</h1>
    <div className='projects'>
        <div className="myproj">
            <img src={p1} alt="Online-Alarm Clock" />
            <div className="caption">
                <p>Online-Alarm Clock</p>
            </div>
        </div>
        <div className="myproj">
            <img src={p2} alt="Linear Regression Plotter" />
            <div className="caption">
                <p>Linear Regression Plotter</p>
            </div>
        </div>
        <div className="myproj">
            <img src={p5} alt="Improvised Portfolio website using react js" />
            <div className="caption">
                <p>Improvised Portfolio website using react js</p>
            </div>
        </div>
        <div className="myproj">
            <img src={p3} alt="Portfolio website using node js" />
            <div className="caption">
                <p>Portfolio website using node js</p>
            </div>
        </div>
        <div className="myproj">
            <img src={p4} alt="To-do list" />
            <div className="caption">
                <p>To-do list</p>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default MyProjects
