import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import './businessStyles/businessCardViewStyle.css';

export default class AvailableBusinessCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
    }
  }

  showBusinessInfo(negid) {
    console.log(negid);
  }

  componentWillMount(){
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/').then(res => {
      console.log(res.data);
      this.setState({
        business: res.data,
      });
      console.log("hi");
      console.log(this.state.business);
    });
  }

  render() {
    return (
      <div className="businessContainer">
        {this.state.business.map(business => {
          if (business.negusuario != JSON.parse(localStorage.getItem("userInfo")).userID) {
            var url = "/availableBusiness/" + business.negid;
            return(
              <a href={url}>
                <div className="businessCard">
                  <div className="back-side">
                    <img className="businessImage" src={business.neglogo}/>
                    <div className="name-tag">
                      <h1>
                        <strong>{business.negnombre}</strong>
                      </h1>
                      <h3>{business.negdetalles}</h3>
                    </div>
                  </div>
                </div>
              </a>
            )
          }
        })}
      </div>
    );
  }

};
