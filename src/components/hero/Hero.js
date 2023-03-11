import React from 'react'
import Fade from 'react-reveal/Fade';
import './Hero.css'


import Waves from '../../assets/waves.svg'

const Hero = () => {
    return (
<>        



        <div className='hero'>

        <div className='hero-divider'>
                <img src={Waves} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container">
                <div className="content">

                    <Fade right>
                        <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                    </Fade>
                    <Fade left>
                    <h1>REDDING REHAB</h1>
                    </Fade>
                    <Fade bottom>
                        <p>"Find your happiness and learn to put it first."</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero