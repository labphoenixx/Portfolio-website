import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/MY_name.gif'
import { Link } from 'react-scroll'
import menu_icon from "../../assets/menu_icon.png";

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    /* Trigger toggle function */
    const toggleMenu = () =>{
        mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }
    /* So, we'll use a condition on mobileMenu and take either ''[null](when true) or '.hide-menu'(when false) as
    the ul's className */

  return (
    <nav className='container'>
      <img src={logo} alt="S Dharshana" className='logo1' />
      <ul className={mobileMenu?'':'hide-menu'}>
        <li><Link to= 'Home-cover' smooth = {true} offset={0} duration={500}>Home</Link></li>
        <li><Link to= 'about' smooth = {true} offset={-100} duration={500}>About Me</Link></li>
        <li><Link to= 'portContainer' smooth = {true} offset={-35} duration={500}>Portfolio</Link></li>
        <li><Link to= 'projWithTitle' smooth = {true} offset={-150} duration={500}>My Projects</Link></li>
        <li><Link to= 'withTitle' smooth = {true} offset={-60} duration={500}>Contact Me</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
