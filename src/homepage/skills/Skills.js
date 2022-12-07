import React from 'react'
import './skills.css'
import DevIcon, {react}from "devicon-react-svg";
import { ListItemSecondaryAction } from '@mui/material';
const Skills = () => {
  
    const icons = [
        {
          name : "React",
          iconName : "react",
        },
        {
            name : "HTML",
            iconName : "html5",
        },
        {
            name : "CSS",
            iconName : "css3",
        },
        {
            name : "JavaScript",
            iconName : "javascript",
        },
        {
            name : "Node Js",
            iconName : "nodejs",
        },
        {
            name : "Jest",
            iconName : "jest",
        },
        {
            name : "Java",
            iconName : "java",
        },
        {
            name : "Oracle DB",
            iconName : "database",
        },
        {
            name : "BootStrap",
            iconName : "bootstrap",
        },
        {
            name : "Material UI",
            iconName : "materializecss",
        },

        ]
  return (
    <div className = "skills-container" id ='skills'>
        <div className='about-me-text'   data-aos="flip-right">
      <span >Skills</span>
      </div>
      <div className='skill-cards-container'>
       {icons.map((item,index) => {
        return(
            <div key={index} className='skill-card'   data-aos="flip-right"> 
               <DevIcon className='skill-icons' icon = {item.iconName}/>
               <span className='skill-name'>{item.name}</span>
            </div>
        )
       })}
          <div className='express-card'   data-aos="flip-right">
          <img className = 'express-icon' src = {require('../skills/express.png')}/>
          <span style={{margin : '5px',fontSize : '1.5rem'}}>express</span>
          </div>
      </div>
    </div>
  )
}

export default Skills