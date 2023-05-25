import React from "react";
import "./Section3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import { BsPeople } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";



const Section3 = () => {
  return (
    <>
      <div className="section3">

        <div className="component3 container">
          <div className="c3-left">
            <h2>WHO WE ARE </h2>
            <h1>
              Redding Rehab makes getting treatment{" "}
              <i>
                <span>simple</span>
              </i>
            </h1>
            <p>
              Your personal medical assistant is always a message away for
              anything you need, at no cost.
            </p>
            <div className="c2-btn">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/contact">
                  <button>CONTACT US</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="c3-right container">
            <div className="c3-card c3-card1">
              <div className="c2-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BsPeople />
                </h2>
                <h1>DEDICATED STAFF</h1>
              </div>
              <p>
              The medical professionals on our team are completely dedicated to your recovery.
              </p>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BsGear />
                </h2>
                <h1>PROVEN METHODS</h1>
              </div>
              <p>
              Our treatment methods are solely based on proven research and science-based evidence. 
              </p>

            </div>

            <div className="c3-card c2-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiTime />
                </h2>
                <h1>24/7 SUPPORT</h1>
              </div>
              <p>
              Guidance and support are always in reach. We provide care for you whenever needed. 
              </p>
            </div>

            <div className="c3-card c3-card4">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <RiSuitcaseLine />
                </h2>
                <h1>EMPLOYMENT ASSISTANCE</h1>
              </div>
              <p>
              Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.
              </p>
              <div className="c3-link">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/jobs">
                  <p>LEARN MORE</p>
                </Link>
              </LinkRoll>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='section3-bottom'>

                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div> */}

        {/* </div> */}
      </div>
    </>
  );
};

export default Section3;
