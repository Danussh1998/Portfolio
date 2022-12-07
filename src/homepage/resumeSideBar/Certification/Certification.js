import React from "react";
import "./certification.css";

const Certification = () => {
  return (
    <div className="certificate-container"  data-aos="fade-up">
      <div className="about-me-text" style={{ color: "black" }}>
        <h1>Certificate</h1>
      </div>
      <div className="center-container">
        <img src={require("../Certification/logo_jspiders.png")}></img>
      </div>
      <span className="training-name">
        Java Training and Developement Center
      </span>
      <div className="certificate-details">
        <ul className="ul-tech-list" style={{listStyle : 'disc'}}>
          <li>
            <b> Successfully completed professional course on :</b>
          </li>
        </ul>

        <ul className="style-list">
          <li>Web technologies (HTML, CSS, Javascript, Reactjs )</li>
          <li>Core Java</li>
          <li>Oracle SQL</li>
        </ul>
      </div>
      <div className="img">
        <img  data-aos="flip-right"
          className="img-container"
          src={require("../Certification/certificate-jspider.jpg")}
        ></img>
      </div>
    </div>
  );
};

export default Certification;
