import React from 'react'
import Fade from 'react-reveal/Fade';

import './ServicesIcons.css'

import ServicesIconsImg from '../../assets/slider1.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'


const ServicesIcon = () => {
  return (
    <>
      

      <div className='services-icon-wrap'>
        <Fade right>
            <div className="services-icon-left">
                <div className='services-icon'>
                <h1 className='icon-header'>ABOUT OUR SERVICES</h1><br/>

                    <div className='services-icons'>
                    <img src={Icon1} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>DEDICATED STAFF</span> <br/> The medical professionals on our team are completely dedicated to your recovery. </p>
                    </div>

                    <div className='services-icons'>
                    <img src={Icon2} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>PROVEN METHODS</span> <br/> Our treatment methods are solely based on proven research and science-based evidence.</p>
                    </div>

                    <div className='services-icons'>
                    <img src={Icon3} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>24/7 SUPPORT</span> <br/> Guidance and support are always in reach. We provide care for you whenever needed.</p>
                    </div>
                </div>
                
            </div>
        </Fade>

        <Fade left>
            <div className="services-icon-right">
                <img src={ServicesIconsImg}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


    </>
  )
}

export default ServicesIcon
