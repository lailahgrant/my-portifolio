import React, { Component } from 'react';
import {Grid,Cell}  from 'react-mdl';

export default class Education extends Component {
  render() {
    return (
      <div>
      {/*pass props */}
      {/* {this.props.startYear} */}

      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}  -  {this.props.endYear}</p>
        </Cell>

        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>


      </div>
    )
  }
}
