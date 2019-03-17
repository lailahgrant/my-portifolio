import React, { Component } from 'react';
import './App.css';
//import styled from 'styled-components';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" 
    title={<Link style={{textDecoration:'none',color:'white'}} to="/">MyPortifolio</Link>} scroll>

            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>

        <Drawer className="header-color" 
    title={<Link style={{textDecoration:'none',color:'black'}} to="/">MyPortifolio</Link>} >
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

     

    
    );
  }
}

export default App;




/*create a wraper an title*/

/* Create a Title component that'll render an <h1> tag with some styles*/
/* const Title=styled.h1`
font-size:1.5rem;
text-align:center;
color:palevioletred;
`; */

/*// Create a Wrapper component that'll render a <section> tag with some styles*/
/* const Wrapper = styled.section`
padding:4rem; background:papayawhip;
`;
 */
/*You can pass a function ("interpolations") to a styled component's template literal to adapt it based on its props.
This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping 
out its background and text color. */
//const Button=styled.button`
/* Adapt the colors based on primary prop */
/* background: ${props=>props.primary ? "palevioletred":"white"};
color: ${props=>props.primary ? "white": "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius:3px;
`;
 */
/*Extending Styles
Quite frequently you might want to use a component, but change it slightly for a single case. Now, you could pass in an 
interpolated function and change them based on some props, but that's quite a lot of effort for overriding the styles once.
To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor. Here we use 
the button from the last section and create a special one, extending it with some color-related styling */
/* const MyButton=styled.button`
 color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background:white;
`;
const OtherButton=styled(MyButton)`
color: tomato;
  border-color: tomato;
`;
 */