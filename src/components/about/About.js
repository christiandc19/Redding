import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";

import './About.css'
import AboutSection from "./AboutSection";

import Wave from '../../assets/waves.svg'



const About = () => {

    return (
            <>



            <div className='about main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                        <div className="about-content">
                            <Fade top>
                                <h1>ABOUT US</h1>

                            </Fade>
                        </div>
                    </div>



            <AboutSection />
            <ContactForm />
            </>
    )

    }
export default About
