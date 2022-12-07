import React from "react";
import "./intrests.css";

const Intrests = () => {
  return (
    <div className="interest-container"  data-aos="fade-up">
      <div className="d-flex flex-column">
        <div className="about-me-text" style={{ color: "black" }}>
          <h1>Intrests</h1>
        </div>

        <ul className="interest-detail-list">
          <li>
            <div className="interest-one my-2 justify-content-between d-flex flex-row">
              <div className="d-flex flex-column new-one">
                <span className="interest-name">Music</span>
                <span className="interest-details">
                  Listening to soothing music is something I can never
                  compromise with, skimming through spotify's song charts is at
                  times the best stress reliever that I can get my hands on.{""}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="interest-one my-2 justify-content-between d-flex flex-row">
              <div className="d-flex flex-column new-one">
                <span className="interest-name">Gaming</span>
                <span className="interest-details">
                  I like to my reflexes a lot while gaming,pushing the rank and
                  having interactive gaming sessions exite me the most.{""}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="interests-one my-2 justify-content-between d-flex flex-row">
              <div className="d-flex flex-column new-one">
                <span className="interest-name">Travelling</span>
                <span className="interest-details">
                  {" "}
                  I do enjoy travelling a lot because it allows me to learn
                  about different places, different people, different cultures
                  and different kinds of lifestyles.{""}
                </span>
              </div>
              {""}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intrests;
