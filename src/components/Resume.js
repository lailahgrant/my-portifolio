import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import logo from './lila.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
       <Grid>
         <Cell className="" col={4}><div style={{textAlign:'center'}}>
           <img src={logo} alt="lailah" height="200px" />
         </div>

        <h2 style={{paddingTop:'2em'}}>LAilah Grant</h2>
        <h2 style={{color:'gray'}}>Programmer</h2>
        <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor
</p>

              <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} />

              <h5>Address</h5>
              <p>KAmwokya Kampala Uganda</p>

            <h5>Phone</h5>
          <p>+256703993262</p>

          <h5>Email</h5>
          <p>lailahgrant19@gmail.com</p>

          <h5>Web</h5>
          <p>lailahgrantmololo.cmo</p>
          <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} />

         </Cell>

         <Cell className="resume-right-col" col={8}>
           <h2>Education</h2>
            <Education startYear={2001} endYear={2007} 
            schoolName= "Harvard University"
            schoolDescription="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmodtempor 
            incididunt ut labore et dolore magna aliqua " />

            <Education startYear={2010} endYear={2012} 
            schoolName= "Oxford University"
            schoolDescription="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmodtempor 
            incididunt ut labore et dolore magna aliqua " />

            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience 
              startYear={2008}
              endYear={2013}
              jobName="Developer Intern"
              JobDescription="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmodtempor 
            incididunt ut labore et dolore magna aliqua"
            />

            <Experience 
              startYear={2008}
              endYear={2013}
              jobName="Developer FullTime job"
              JobDescription="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmodtempor 
            incididunt ut labore et dolore magna aliqua"
            />
            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Skills</h2>
            <Skills 
              skill="JavaScript" progress={85}
            />
            <Skills 
              skill="HTML/CSS" progress={100}
            />
            <Skills 
              skill="React" progress={45}
            />

         </Cell>


       </Grid>
      </div>
    )
  }
}
