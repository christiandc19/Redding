import React from "react";
import "./MissionHome.css";
import Fade from "react-reveal/Fade";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content container">
        <Fade top>
          <h1>OUR MISSION</h1>
          </Fade>
          <Fade left>
          <p>
            Provide every individual a quiet, calm, and safe place to begin the
            journey. It is our philosophy that in order to reduce the incidence
            and prevalence of Mental Health issues and other behavioral health
            problems among adults through the provision of addiction treatment
            services, each individual must be empowered to make decisions about
            their care with the expected outcome of an increased quality of
            life.
          </p>
          </Fade>
          <Fade right>
          <h2>"Find your happiness and put it first."</h2>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default MissionHome;
