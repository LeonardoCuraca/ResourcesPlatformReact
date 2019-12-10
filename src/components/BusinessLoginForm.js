import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import './css/pagesStyle/NewBusinessFormStyle.css';

export default class NewBusinessForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businessLogged: false,
      negpassword: "",
    }
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changePassword(e) {
    this.setState({
      negpassword: e.target.value
    });
  }

  handleSubmit(event) {
    var id = this.props.match.params.businessId;
    var password = this.state.negpassword;
    if (password == "") {
      alert("Inserte una contraseña");
      return;
    }
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/login/' + id + '/' + password + '/').then(res => {
      if (res.data.negid != null) {
        localStorage.setItem("business"+this.props.match.params.businessId, "logged");
        this.setState({
          isLoggedIn: true,
        });
      } else {
        console.log("jojojojo");
      }
    }).catch((error) => {
      console.log("old user");
      //localStorage.setItem("userInfo", JSON.stringify(this.state));
    });
  }

  render() {
    let content;
    if (localStorage.getItem("business"+this.props.match.params.businessId)) {
      return <Redirect to={{pathname: '/myBusiness/'+this.props.match.params.businessId}} />
    } else {
      content = (<div className="back">
        <div className="box">
          <h2>Ingrese la Contraseña del Negocio</h2>
          <div className="inputBox">
            <input type="password" value={this.state.negpassword} onChange={this.changePassword} />
            <label>Contraseña del Negocio</label>
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Añadir</button><br/>
          <button className="closeButton" onClick={this.props.closeBusinessLoginForm}>X</button>
        </div>
      </div>)
    }
    return (
      <div>{content}</div>
    );
  }
};
