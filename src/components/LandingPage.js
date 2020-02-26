import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import myimage from './lila.jpg';
import '../App.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width:'100%', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={myimage} alt="mypic" className="avatar-img"/>
            
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr />
                <p>HTML/CSS | Bootstrap | JavaScript | React | React-Native | Nodejs | MongoDB</p>
                <div className="social-links"  >
                {/*github */}
                      <a target="_blank" href="#" rel="noopener noreferrer" href="https://github.com/lailahgrant"><i className="fab fa-github"></i></a>

                      {/*linked in */}
                      <a target="_blank" href="#" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>

                      {/*linked in */}
                      <a target="_blank" href="#" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>

                      {/*linked in */}
                      <a target="_blank" href="#" rel="noopener noreferrer"><i className="fab fa-facebook"aria-hidden="true"></i></a>
                </div>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}
