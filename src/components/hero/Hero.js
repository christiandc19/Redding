import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/hero-bg.mp4'



const Hero = () => {
    return (
<div className='hero'>
        <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />            
            <div className="container">
                <div className="content">
                    
                <Fade top><h1>REDDING REHAB</h1></Fade> 
                <Fade bottom>
                    <h2 className='subtitle'>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h2>
                    <p>Find your happiness and learn to put it first.</p>
                </Fade>

                    <Link to="/treatment"><button>Learn More</button></Link>
                </div>
            </div>
        </div>    )
}

export default Hero
