//contains only routes

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main=()=>(
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/aboutme" component={AboutMe}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/projects" component={Projects}></Route>
    </Switch>
)


export default Main ;