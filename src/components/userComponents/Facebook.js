import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import CanvasJSReact from '../../canvasjs.react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Facebook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      detalle: '',
      picture: 'https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/patricio.jpg?alt=media&token=2f00f452-e991-485e-b160-1aa649ef7ac4',
      business: []
    }
  }

  responseFacebook = response => {
      console.log(response);
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
      });
      localStorage.setItem("userInfo", JSON.stringify(this.state));
  }

  render() {

    let fbContent;

    if(JSON.parse(localStorage.getItem("userInfo") != null)) {
      return <Redirect to={{pathname: '/userProfile'}} />
    } else {
      fbContent = (
        <div className="centerDiv">
          <FacebookLogin
            appId="711624936017696"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return (
      <div>{fbContent}</div>
    );
  }
};
