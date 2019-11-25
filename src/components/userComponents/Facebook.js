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
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      });
      this.registerUser();
      localStorage.setItem("userInfo", JSON.stringify(this.state));
      this.setState({
        isLoggedIn: true,
      });
  }

  registerUser() {
    console.log(this.state.userID);
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.picture);
    let datos = {
      usuid: this.state.userID,
      usunombre: this.state.name,
      usuemail: this.state.email,
      usufoto: this.state.picture,
    }
    console.log(datos);
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/usuarios/', datos).then(res => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {

    let fbContent;

    if(this.state.isLoggedIn == true) {
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
