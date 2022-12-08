import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import './Footer.css'

const Footer = () =>{
    return (
        <div className="footer">
        <div className="footer-container">
            <div style ={{color:"white"}}  className="designed-by" data-aos="fade-up">
                Designed by
                <p style ={{color:"red"}} className="designed-by-highlighted-txt" data-aos="fade-up">Danussh Arvind B.R</p>
            </div>
            <div className="left">
                <div className="location">
                    <div className="home-icon" data-aos="fade-up">
                    <FaHome size={20} style={{color:'#fff' , marginRight:"1rem"}}/>
                    </div>
                    <h4 size={20} style={{color:"white" , marginRight:"1rem" , fontSize:'15px'}} data-aos="fade-up">
                    #12, 8th cross, Shakthiganapathinagar, Basaveshwaranagar <br/>
                    Bangalore 560079</h4> 
                    
                </div>
                <div className="phone-email">
                <div className="phone" data-aos="fade-up">
                    <h4 size={20} style={{color:'#fff' , marginRight:"2rem" ,fontSize:'15px'}}><FaPhone size={20} style={{color:"white" , marginRight:"1rem"}} data-aos="fade-right"/>7204721664</h4>
                </div>
                <div className="email" data-aos="fade-up">
                    <h4 size={20} style={{color:"white" , marginRight:"2rem",fontSize:'15px'}}><FaMailBulk size={20} style={{color:"white" , marginRight:"1rem"}} data-aos="fade-right"/>danussh1998@gmail.com</h4>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;