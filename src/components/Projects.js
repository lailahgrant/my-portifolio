import React, { Component } from 'react'
import {Tabs,Tab, Grid,Cell,Card,CardActions,CardMenu,CardText,CardTitle, Button, IconButton} from 'react-mdl';
import Background from './react.png';
import Bg from './angular.png';
import Bgjs from './javascript.jpg';
import Bgmon from './mongodb.png';

export default class Projects extends Component {
  
  constructor(props){
    super(props);
    this.state = {activeTab:0};
  }

  toggleCategories(){
    
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          {/*project 1 */}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'white', height:'176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

          {/*project 2 */}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'white', height:'176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

          {/*project 3 */}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        </div>
       
      )
    }else if(this.state.activeTab ===1){
      return(

        <div className="projects-grid">

        {/*project 1 */}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bg}) center / cover`}}>Angular Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/*project 2 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bg}) center / cover`}}>Angular Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/*project 3 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bg}) center / cover`}}>Angular Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        </div>

        
      )
    }else if(this.state.activeTab === 2){
      return(

        <div className="projects-grid">
        {/*project 1 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgjs}) center / cover`}}>JavaScript Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/*project2 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgjs}) center / cover`}}>JavaScript Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/*project 3 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgjs}) center / cover`}}>JavaScript Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        </div>

        
      )
    }else if (this.state.activeTab === 3){
      return(

       <div className="projects-grid">

        {/*project 1 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgmon}) center / cover`}}>MongoDB Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card> 

        {/*project 2 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgmon}) center / cover`}}>MongoDB Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/*project 3 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background: `url(${Bgmon}) center / cover`}}>MongoDB Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
        
        </div>
      )
    }

  } 

  render() {

    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
          
      </div>
    )
  }
}
