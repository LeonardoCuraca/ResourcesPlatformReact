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
import MyBusiness from "./components/myBusiness";
import QRCode from "./components/qrCodeGenerator";
import Dashboard from "./components/dashboard";
import MainPage from "./components/MainPage";
import LoginForm from "./components/userComponents/LoginForm";

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact="" path="/" component={MainPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/qrCode" component={QRCode} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/myBusiness" component={MyBusiness} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
