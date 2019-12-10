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
import Facebook from "./components/userComponents/Facebook";
import UserProfile from "./components/userProfile";
import UserProfileView from "./components/UserProfileView";
import MyBusiness from "./components/myBusiness";
import Dashboard from "./components/dashboard";
import DashboardMailBox from "./components/dashboardMailBox";
import MainPage from "./components/MainPage";
import OtherBusiness from "./components/OtherBusiness";
import LoginForm from "./components/userComponents/LoginForm";
import BusinessProfilePage from "./components/BusinessProfilePage"
import BusinessLoginForm from "./components/BusinessLoginForm";
import UserSkillsForm from "./components/UserSkillsForm";
import BusinessProfileOwn from "./components/BusinessProfileOwn";

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact="" path="/" component={MainPage} />
        <Route path="/login" component={LoginForm} />
        <Route exact="" path="/userProfile" component={UserProfile} />
        <Route exact="" path="/userProfile/:userId" component={UserProfileView} />
        <Route exact="" path="/availableBusiness" component={OtherBusiness} />
        <Route path="/availableBusiness/:businessId" component={BusinessProfilePage} />
        <Route exact="" path="/myBusiness" component={MyBusiness} />
        <Route exact="" path="/myBusiness/login/:businessId" component={BusinessLoginForm} />
        <Route exact="" path="/myBusiness/employee/skills/:userid" component={UserSkillsForm} />
        <Route exact="" path="/myBusiness/:businessId" component={BusinessProfileOwn} />
        <Route exact="" path="/myBusiness/:businessId/dashboard/" component={Dashboard} />
        <Route exact="" path="/myBusiness/:businessId/dashboard/mailBox" component={DashboardMailBox} />
      </Router>
    );
  }
}

export default App;
