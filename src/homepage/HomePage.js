import React from "react";
import { FaFacebook, FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typical from "react-typical";
import Contact from "./Contact/Contact";
import "./HomePage.css";
import Resume from "./resumeSideBar/Resume";
import Project from "./Projects/Project";
import Skills from "./skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/danussh.arvind" target="_blank" rel="noopener noreferrer">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.instagram.com/danussharvind/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="https://www.linkedin.com/in/danussh-arvind-b-r-3aa861192" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a href="https://github.com/Danussh1998" target="_blank" rel="noopener noreferrer">
                  <FaGit></FaGit>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello,I'M{" "}
                <span className="highlighted-text">Danussh Arvind B.R</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Software Engineer",
                      1000,
                      "Front end react developer",
                      1000,
                      "MERN stack",
                      1000,
                      "Full stack developer",
                      1000,
                    ]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline">
                  If You Think Math is Hard Try Web Design.
                </span>
              </span>
            </div>
            <div className="profile-options">
            <a style={{color:'white', textDecoration:'none'}} href="#contact">
              <button className="btn primary-btn">
              Contact me
              </button>
              </a>
              <a
                href="/assets/Danussh Arvind B.R CV.pdf"
                download="Danussh Arvind B.R CV.pdf"
              >
                <button className="btn highlighted-btn">Get resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <img
          src={require("./Footer/shape-bg.png")}
          alt="no internet connection"
        />
      </div>
      <div className="about-me-container" id="about">
        <div className="about-me-section aboutme-inside my-3">
          <div className="d-flex flex-column ">
            <span className="about-me-text"  data-aos="fade-up">About me</span>
            <span className="why-text-sub" style={{marginBottom : "2%"}}  data-aos="fade-up">Why Choose me?</span>
            <div className="row justify-content-center shadow-container">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
              data-aos="fade-up">
                <lottie-player className = "lottie-player"
                  src="https://assets6.lottiefiles.com/packages/lf20_hrkmmhjf.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "500px", height: "auto" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column"  data-aos="fade-up">
                <span className="text-about-me">
                  Full stack web developer with background knowledge in MERN
                  stack. Knack of building the applications with atmost
                  efficiency. Strong Professional and willing to be an asset for
                  the organization. Android developer with background knowledge
                  of JAVA and Android studio.
                </span>
                <span className="few-highlights">
                  <span className="few-text">Here are few highlights</span>
                </span>
                <span className="few-list">
                  <ul className="list-me" style={{listStyle : "initial"}}>
                    <li> Front end React JS developer</li>
                    <li> Interactive Front-end as per Design</li>
                    <li> Android developer</li>
                    <li> Fixing and debugging the android applications</li>
                    <li>React JS,Node JS,Express,Oracle SQL</li>
                    <li> Android studio and JAVA</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Resume></Resume>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      
    </>
  );
};

export default HomePage;
