import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

//Pages
import LoginPage from "./components";
import BusinessView from "./components/business";
import UserCardView from "./components/userCardView";
import UserNavBar from "./components/userNavBar";
import UserSkills from "./components/userSkills";
import BusinessCardView from "./components/businessCardView";
import ResourcesNavBar from "./components/resourcesNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={LoginPage}/>
        <Route path="/businessView">
          <UserNavBar/>
          <div className="RighPart">
            <BusinessCardView/>
          </div>
        </Route>
        <Route path="/lookForJobs">
          <UserNavBar/>
          <div className="RighPart">
            <BusinessCardView/>
          </div>
        </Route>
        <Route path="/userCardView">
          <UserCardView/>
        </Route>
        <Route path="/userProfile">
          <UserNavBar/>
          <div className="RighPart">
            <UserCardView/>
            <UserSkills/>
          </div>
        </Route>
        <Route path="/dashboard">
          <ResourcesNavBar/>
        </Route>
      </Router>
    );
  }
}

export default App;
