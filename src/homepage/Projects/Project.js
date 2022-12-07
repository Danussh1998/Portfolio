import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="project-container" id = "project">
      <div className="about-me-text" style={{ color: "" }}   data-aos="zoom-in">
        <span>Projects</span>
      </div>
      <div class="row card-container">
        <div class="col-lg-4 d-flex align-items-stretch card-item-container">
        <div class="card card-item"   data-aos="zoom-in">
          <img
            class="card-img-top "
            src={require("../Projects/social_media.jpg")}
            alt="Card image cap"
          />
          <div class="card-body" data-aos="fade-up">
            <h5 class="card-title">Socioverse – Social Media application</h5>
            <p class="card-text">
              Developed “Socioverse” a social media application that includes
              all the real time requirements like displaying posts, people
              online status , like - unlike post, user profile and so on.
            </p>
            <div className="github-button" >
            <a href="https://github.com/Danussh1998/React_Social_media/tree/master/social_media" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch card-item-container">
        <div class="card card-item"   data-aos="zoom-in">
          <img
            class="card-img-top form-img"
            src={require("../Projects/forms1.webp")}
            alt="Card image cap"
          />
          <div class="card-body"   data-aos="fade-up">
            <h5 class="card-title">React-forms</h5>
            <p class="card-text">
              Developed a React-forms to understand the form handling and form
              validations and use of routes.
            </p>
            <div className="github-button" style={{marginTop : "10%"}}>
            <a href="https://github.com/Danussh1998/React_forms/tree/master/functional_comp_basics" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch card-item-container">
        <div class="card card-item"   data-aos="zoom-in">
          <img
            class="card-img-top form-img"
            src={require("../Projects/portfolio1.png")}
            alt="Card image cap"
          />
          <div class="card-body" data-aos="fade-up">
            <h5 class="card-title">Portfolio</h5>
            <p class="card-text">
              Developed a Real World Responsive Portfolio Website With Email Functionality using React js andEmail.js.
            </p>
            <div className="github-button">
            <a href="#" class="btn btn-primary" style={{marginTop : "6%"}} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div> 
  );
};

export default Project;
