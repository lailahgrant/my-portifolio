import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import logo from './lila.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}><div style={{textAlign:'center'}}>
           <img src={logo} alt="lailah" height="200px" />
         </div>

          </Cell>
        </Grid>
        <h3>
        My name is Kemigisa Lailah Grant. I'm a female muslim Ugandan woman which means I come from Uganda(The Pearl of Africa). I'm from a humble home that I thank Allah for daily. I really love learning new things and inspire many people more so the ladies. I want to master the art of working, associating and contributing to the team and general public.
        </h3>
      </div>
    )
  }
}
