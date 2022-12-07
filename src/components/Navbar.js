import './NavbarStyles.css'
import {FaBars, FaTimes} from "react-icons/fa"
import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick =() =>{
        setClick(!click);
    }
    
  return (
    <div className='header'>
    <a href to = '/'>
        <h1>Portfolio</h1>
    </a>
    <ul className={click?'nav-menu nav-active' :'nav-menu'}>
        <li>
            <a href = '#' onClick = {handleClick}>Home</a>
        </li>
        <li>
            <a href= '#about' onClick = {handleClick}>About</a>
        </li>
        <li>
            <a href = "#resume" onClick = {handleClick}>Resume</a>
        </li>
        <li>
            <a href = "#skills" onClick = {handleClick}>Skills</a>
        </li>
        <li>
            <a href='#project' onClick = {handleClick}>Project</a>
        </li>
        <li>
            <a href = '#contact' onClick = {handleClick}>Contact</a>
        </li>
    </ul>
    <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style ={{color : "#fff"}}></FaTimes>) : (<FaBars size={20} style = {{color : "#fff"}}></FaBars>)}
    </div>
    </div>
  )
}

export default Navbar
