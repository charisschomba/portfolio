import React from 'react';
import routes from './routes';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
 import HomePage from '../Components/Pages/HomePage';
 import AboutMe from '../Components/Pages/About';
 import ResumeSection from '../Components/Pages/Resume/index';
import ContactPage from '../Components/Pages/Contact';

export default () => (
  <Router>
    <Switch>
      <Route exact path={routes.index} component={HomePage}/>
      <Route path={routes.about} component={AboutMe}/>
      <Route path={routes.resume} component={ResumeSection}/>
      <Route path={routes.contact} component={ContactPage}/>
    </Switch>
  </Router>
);
