import React from "react";
import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import "./Hero.css";
import Hero1 from '../../assets/hero-1-min.jpg'
import Hero2 from '../../assets/hero-2-min.jpg'
import Hero3 from '../../assets/hero-slide-4-min.jpg'
import Hero4 from '../../assets/hero-slide-2-min.jpg'


const Hero = () => {
  return (
    <>
      <div className="hero">

      <div class="fling-minislide">
        <img src={Hero1} alt="Slide 1" />
        <img src={Hero2} alt="Slide 2" />
        <img src={Hero3} alt="Slide 3" />
        <img src={Hero4} alt="Slide 3" />
      </div>

      <div class="title-wrapper">
        <h2>WELCOME TO</h2>
      <h1>Redding Rehab</h1>
      <h3>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h3>

        <div className="hero-btn">

          <div>
            <Link to="/contact">
              <button>CALL US</button>
            </Link>
          </div>

          <div className="hero-btn2">
            <Link to="/method">
              <button>LEARN MORE</button>
            </Link>

          </div>

        </div>
      </div>

        
        {/* <div className="hero-container">
          <div className="content">
            <h1 className="animate-charcter">Redding Rehab</h1>
            <Fade left>
              <h2 className="subtitle">
                Substance Abuse Addiction and Mental Health Treatment Facility
              </h2>
            </Fade>
            <br />
            <div className="hero-btn">
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
            <br />
            <Fade bottom>
              <p>Find your happiness and learn to put it first.</p>
            </Fade>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
