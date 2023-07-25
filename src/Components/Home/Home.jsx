import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='container'>
    <p className='transform'>TRANSFORM CX LIMITED </p> 
    <p className='sre'>SRE - Site Reliability Engineering</p>
    <p className='content'>TransformCX provides site reliability engineer (SRE) services for all kind of  
    product developed or deployed on cloud platforms and other site-specific 
    operations working in a genuinely agile mode.</p>
    <div className='features'>Features</div>
    <div className='lists'>
    <div style={{marginBottom:'8px'}}> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
    <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
    </svg>24x7 coverage</div>
    
    <div style={{marginBottom:'8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
    <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
    </svg>Remote or onsite coverage</div>

    <div style={{marginBottom:'8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
    <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
    </svg>Cross skilled professionals</div>

    <div style={{marginBottom:'8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
    <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
    </svg>Integrated with Online Web chat & Phone support</div>

    <div ><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
    <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
    </svg>Platform or technology agnostic</div>
    </div>

    <div className='benefits'>Benefits</div>
      <div className='lists2'>
        <div style={{marginBottom:'8px'}}> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
        <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
        </svg>Fully integrated with Service Management processes and tools</div>

        <div style={{marginBottom:'8px'}}> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
        <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
        </svg>Highly professional team</div>

        <div style={{marginBottom:'8px'}}> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" style={{marginRight:'16px'}}>
        <circle cx="4" cy="4.5" r="4" fill="#2A97E1"/>
        </svg>Highly skilled individuals</div>

      </div>
    </div>

    {/* <div className='secondCont'>
        <p className='price'>$93 to $140 a person a day</p>
        <p className='pricingLabel'>Education pricing available</p>
    </div> */}
    </>
  )
}

export default Home