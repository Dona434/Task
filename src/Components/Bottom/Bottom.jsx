import React from 'react';
import './Bottom.css';

const Bottom = () => {
  return (
    <div className='bottomcontainer'>
        <p className='planning'>Planning</p>
        <div className='line2'></div>
        <p className='contentleft'>Planning service</p>
        <p className='contentright'>YES</p>
        <div className='line2'></div>
        <p className='contentleft'>How the planning service works</p>
        <p className='contentright' style={{width: "620px"}}>Our highly experienced professionals understand the Cloud infrastructure, organisation,
            and business process implications of moving to cloud and can help you avoid common pitfalls. 
            In keeping with our proven best practices and intellectual property, we start by conducting 
            a detailed technical and business analysis, build using infrastructure as code that achieves 
            your objectives and is ready to build.</p>
        <div className='line2'></div>
        <p className='contentleft'>Planning service works with specific services</p>
        <p className='contentright'>NO</p>
        <div className='line2'></div>

        <p className='planning' style={{marginTop:"46px",marginBottom:"17px"}}>Training</p>
        <div className='line2'></div>
        <p className='contentleft'>Training service provided</p>
        <p className='contentright'>YES</p>
        <div className='line2'></div>
        <p className='contentleft'>How the planning service works</p>
        <p className='contentright' style={{width: "600px"}}>Transformcx runs an extensive program of varying durations from 4 weeks to 12 weeks
         on cloud and DevOps training. Transformcx provides all the material for preparation, and
         classes can run on a remote basis. <br></br><br></br>
         We can provide training to work on AWS,Azure, Google Cloud & IBM Cloud platforms.</p>
        <div className='line2'></div>
        <p className='contentleft'>Training is tied to specific services</p>
        <p className='contentright'>NO</p>
        <div className='line2'></div>

        <p className='migration' style={{marginTop:"46px",marginBottom:"17px"}}>Setup and migration</p>
        <div className='line2'></div>
        <p className='contentleft'>Setup or migration service available</p>
        <p className='contentright'>YES</p>
        <div className='line2'></div>
        <p className='contentleft'>How the setup or migration service works</p>
        <p className='contentright' style={{width: "650px"}}>Our highly experienced professionals understand the Cloud infrastructure, organisation,and business process implications of moving to cloud and can help you avoid common pitfalls. In keeping with our proven best practices and intellectual property, we start by conducting a detailed technical and business analysis, build using infrastructure as code that achieves your objectives and is ready to build.</p>
         <div className='line2'></div>
         <div className='line2'></div>
    </div>
  )
}

export default Bottom