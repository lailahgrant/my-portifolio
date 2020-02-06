import React, { Component } from 'react'
import {Grid,Cell, List,ListItem,ListItemContent,} from 'react-mdl';
import logo from './lila.jpg';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Lailah Grant</h2>
          <img src={logo} alt="lailah" style={{height:'250px'}} />
          <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt 
</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:''}} ><i  className="fa fa-phone-square"/>(+256)703993262</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:''}} ><i className="fa fa-fax" />(+256)703993262</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:''}} ><i className="fa fa-envelope" />lailahgrant19@gmail.com</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent icon="person"style={{fontSize:'30px', fontFamily:''}} >SkypeId</ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}
