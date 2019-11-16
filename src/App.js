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

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/login" component={Facebook} />
        <Route path="/qrCode" component={QRCode} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/myBusiness" component={MyBusiness} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
