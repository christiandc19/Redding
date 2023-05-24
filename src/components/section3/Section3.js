import React from "react";
import "./Section3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import { BiBrain } from "react-icons/bi";

const Section3 = () => {
  return (
    <>
      <div className="section3">

        <div className="component3 container">
          <div className="c3-left">
            <h2>MENTAL HEALTH SERVICES </h2>
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
                <Link to="/mental-health">
                  <button>VIEW ALL</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="c3-right">
            <div className="c3-card c3-card1">
              <div className="c2-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>STRESS MANAGEMENT</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>DEPRESSION</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c2-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>ANXIETY DISORDER</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>ANGER MANAGEMENT</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
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
