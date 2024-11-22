import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomeCover from './components/Home/homeCover'
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/portfolio";
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomeCover/>{}
      <div className="container">
        <AboutMe/>
        <Portfolio/>
        <MyProjects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
