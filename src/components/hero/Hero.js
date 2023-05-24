import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
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

        <Fade left>
          <h2>WELCOME TO</h2>
        </Fade>

        <Fade right>
          <h1>Redding Rehab</h1>
        </Fade>

        <Fade left>
          <h3>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h3>
        </Fade>

        <div className="hero-btn">

          <div>
            <Link to="/contact">
              <Fade left>
                <button>CALL US</button>
              </Fade>
            </Link>
          </div>

          <div className="hero-btn2">
            <Link to="/method">
              <Fade right>
                <button>LEARN MORE</button>
              </Fade>
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
