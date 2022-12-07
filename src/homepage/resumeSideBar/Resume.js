import React, { useState } from "react";
import "./resume.css";
import {
  FaCertificate,
  FaClock,
  FaGraduationCap,
  FaMedal,
} from "react-icons/fa";
import Education from "../resumeSideBar/Education/Education";
import Certification from "../resumeSideBar/Certification/Certification";
import Experience from "../resumeSideBar/Experience/Experience";
import Intrests from "../resumeSideBar/Intrests/Intrests";
const Resume = () => {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [interests, setInterests] = useState(false);
  const setAllFalse = () => {
    setEducation(false);
    setWorkHistory(false);
    setCertificate(false);
    setInterests(false);
  };

  const changeState = (function1, state1) => {
    setAllFalse();
    function1(state1);
  };
  return (
    <div
      className="resume-outer-section d-flex flex-column"
      // style={{ backgroundColor: "yellow"}}
      id ="resume"
    >
      <span className="about-me-text resume-heading"   data-aos="fade-up">Resume</span>
      <span className="why-text-sub"   data-aos="fade-up">My formal bio details</span>
   <div className="height-container">
      <div
        className="resume-new-section row resume-detail-container"
      >
        <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
          <div className="d-flex flex-column bg-new text-white" >
            <div className="d-flex flex-column icons-span-container ">
              <span className="icons-span">
                <FaGraduationCap />
                {""}
              </span>
              <span className="icons-span">
                <FaClock />
                {""}
              </span>
              <span className="icons-span">
                <FaMedal />
                {""}
              </span>
              <span className="icons-span">
              <FaCertificate />
                {""}
              </span>
            </div>
          </div>
          <div className="d-flex flex-column name-list-container">
            <span
              className={
                education === false
                  ? "resume-options-items"
                  : "selected resume-options-items"
              }
              onClick={() => {
                changeState(setEducation, true);
              }}
            >
              Education
            </span>
            <span
              className={
                workHistory === false
                  ? "resume-options-items"
                  : "selected resume-options-items"
              }
              onClick={() => {
                changeState(setWorkHistory, true);
              }}
            >
              Experience
            </span>
            <span
              className={
                certificate === false
                  ? "resume-options-items"
                  : "selected resume-options-items"
              }
              onClick={() => {
                changeState(setCertificate, true);
              }}
            >
              Certificate
            </span>
            <span
              className={
                interests === false
                  ? "resume-options-items"
                  : "selected resume-options-items"
              }
              onClick={() => {
                changeState(setInterests, true);
              }}
            >
              Interests
            </span>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 resume-right-section">
          {education === true && <Education />}
          {workHistory === true && <Experience />}
          {certificate === true && <Certification />}
          {interests === true && <Intrests />}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
