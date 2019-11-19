import React, { Component } from 'react';
import axios from 'axios';
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
      picture: '',
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
        picture: response.picture.data.url,
      });
      this.registerUser();
      localStorage.setItem("userInfo", JSON.stringify(this.state));
  }

  registerUser() {
    console.log(this.state.userID);
    let datos = {
      usuid: this.state.userID,
      usunombre: this.state.name,
      usuemail: this.email,
      usufoto: this.picture,
    }
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/usuarios/', datos).then(res => {
      console.log(res);
    });
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
            autoLoad={false}
            fields="name,email,picture.type(large)"
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
