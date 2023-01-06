import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineMail } from 'react-icons/ai';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>
    <div className="container mainContainer-contactForm">
            <div className='contactForm'>
                <div className="map">
                    <div className="location">
                        <h1 className="location-header">Get In Touch</h1><br />
                        <p><AiOutlinePhone /> +1 (323) 452-6659  </p><br />
                        {/* <p><AiOutlineMail /> info@reddingrehab.com  </p><br /> */}
                        <p><BsFillPinMapFill /> 3580 Santa Rosa Way, Redding, CA 96003  </p><br />
                        <p className="admission">Please call our admission department or fill out the form if you have any questions.</p>
                    </div>

                    <div>
                        <iframe title="map" width="500" height="250" id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3580%20Santa%20Rosa%20Way,%20Redding,%20CA%2096003+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

                <div className="contact-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>SEND A MESSAGE</h1>
                        <input className="user-input" type="text" name='name' placeholder='Name' required />
                        <input className="user-input" type="text" name='email' placeholder='Email' required />
                        <input className="user-input" type="text" name='email' placeholder='Subject' required />

                        <textarea className="user-input email-input" resize= "none" name="message" rows="4" placeholder="How can we help?" required ></textarea>
                        <div className="submit-btn">
                            <button type='submit' className="btn-modal btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
        </>
    )
}

export default ContactForm