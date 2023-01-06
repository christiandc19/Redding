import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'

import BgVideo from '../../assets/hero-vbg.mp4'

// import HeroLogo from '../../assets/sacramento-logo.png'

import Services from '../services/Services';
import ContactForm from '../contact/ContactForm';
import InsuranceSection from '../insurance/InsuranceSection';


const Home = () => {
    return (
        <>
        <div className='hero'>
             <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />

            <div className="container">
                <div className="content">
                    

                    {/* <div className='hero-logo'>
                    <Fade left>
                        <img src={ HeroLogo } alt="" />
                    </Fade>
                    </div>
 */}

                <div className='hero-header'>
                    <h1>REDDING <br/> <span>REHAB</span></h1>
                </div>
                
                    <Fade bottom>
                        <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY</h2>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        <Services />
        <InsuranceSection />
        <ContactForm />



        </>
    )
}

export default Home






























