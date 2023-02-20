import React from 'react'
import './JobSection.css'
import Fade from 'react-reveal/Fade';


const JobSection = () => {
    return (
        <>



<Fade left>
    <h1 className='sample-header'>Get hired at a great company in recovery.</h1><br/>
</Fade>

<Fade right>
<section className='sampleSection'>
  <div class="sampleContainer">
    
    <div class="sample-left"></div>
    <div class="sample-right">
      <div class="content">
      <h1 className='sample-header'>JOBS PROGRAM</h1>
      <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.  
        <br /> <br />
        Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.  </p>

        <div className='job-link'>
        <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
</Fade>

        </>
    )
}

export default JobSection
