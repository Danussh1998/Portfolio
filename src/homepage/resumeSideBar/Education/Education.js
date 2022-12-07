import "./education.css";

import React from "react";

const Education = () => {
  return (
    <div className="d-flex flex-column education-container"  data-aos="fade-up">
      <div className="about-me-text" style={{ color: "black" }}>
        <h1>Education</h1>
      </div>
      <ul className="education-details-list">
        <li>
          <div className="education-one my-3 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one education-detail-item">
              <span className="university-name">Reva University
              </span>
              <span className="university-percentage">CGPA : 7.34{""}</span>
            </div>
            {""}
            <div className="education-detail-passedout">
              <span className="year-passedout">2016-2020</span>
            </div>
          </div>
        </li>
        <li>
          <div className="education-one my-3 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one education-detail-item">
              <span className="university-name">
                Sri Chaitayna PU College
              </span>
              <span className="university-percentage">
                Percentage : 74%{""}
              </span>
            </div>
            {""}
            <div className="education-detail-passedout">
              <span className="year-passedout">2014-2015</span>
            </div>
          </div>
        </li>
        <li>
          <div className="education-one my-3 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one education-detail-item">
              <span className="university-name">
                S Cadambi Vidya Kendra High School
              </span>
              <span className="university-percentage">
                Percentage : 86%{""}
              </span>
            </div>
            {""}
            <div className="education-detail-passedout">
              <span className="year-passedout">2012-2013</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
