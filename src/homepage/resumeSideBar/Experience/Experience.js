import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-container"  data-aos="fade-up">
      <div className="about-me-text" style={{ color: "black" }}>
        <h1>Experience</h1>
      </div>
      <div className="detail-container">
        <h2 style={{color: "blue"}}>
          <b>HCL technologies</b>
        </h2>
        <table className="table-data">
          <tr>
            <td>
              <b style={{fontWeight : "bold"}}>Period</b>
            </td>
            <td>:</td>
            <td> Jan 28th 2021 – till date</td>
          </tr>
          <tr>
            <td>
              <b style={{fontWeight : "bold"}}>Designation</b>
            </td>
            <td>:</td>
            <td>Junior Developer</td>
          </tr>
        
        </table>
        <div className="keyarea-container">
        <b style={{fontWeight : "bold"}}>Key results area :</b>
          <li style={{marginTop : "10px"}}>
            <b>Web Development</b>
          </li>
          <ul>
            <li>Developing components in front end using React.js.</li>
            <li>
              {" "}
              Performing the testing of the React.js code by creating unit test
              cases using Jest framework.{" "}
            </li>
          </ul>
          <li>
            <b>Android Development</b>
          </li>
          <ul>
            <li>Hands on experience in android programming using java.</li>
            <li>
              {" "}
              Analyzing the defects [logs] for finding the root cause of the
              issue raised in jira tool.{" "}
            </li>
            <li>
              {" "}
              With the help of root cause analysis debugging the code to resolve
              the issue.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
