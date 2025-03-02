import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import EmployeeRequest from './EmployeeRequest';
import BusinessMap from './BusinessMap';
import './businessStyles/BusinessProfileStyle.css';

export default class BusinessProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
    }
  }

  componentWillMount(){
    console.log(this.props);
    var id = this.props.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        business: res.data,
      });
    });
  }

  render() {
    var center = {
      lat: this.state.business.negLati,
      lng: this.state.business.negLong
    };
    return (
      <div>
        <section className="banner-area" id="home">
          <img className="businessImage" src={this.state.business.neglogo}/>
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-between" style={{height: '693px'}}>
              <div className="banner-content col-lg-6 col-md-6 ">
                <h1 className="businessName text-uppercase">
                  {this.state.business.negnombre}
                </h1>
                <h6 className="text-white ">{this.state.business.negdetalles}</h6>
                <h1 className="text-uppercase">
                  {this.state.business.negcelular}
                </h1>
                <i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"/>
                <p className="pt-10 pb-10 text-white">
                  Dirección: {this.state.business.negdireccion}
                </p>
                <i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"/>
                <p className="pt-10 pb-10 text-white">
                  Correo Electrónico: {this.state.business.negemail}
                </p>
              </div>
            </div>
          </div>
        </section>
        <BusinessMap
          center = {center}
        />
        <EmployeeRequest
          businessId = {this.props.businessId}/>
      </div>
    );
  }

};
