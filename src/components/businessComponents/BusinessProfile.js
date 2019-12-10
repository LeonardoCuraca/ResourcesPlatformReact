import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import BusinessImageUpload from './BusinessImageUpload';
import BusinessLocationUpdateForm from './BusinessLocationUpdateForm';
import BusinessUpdateForm from './BusinessUpdateForm';
import BusinessMap from './BusinessMap';
import QrCodeComponent from './qrCodeGenerator';

import './businessStyles/BusinessProfileStyle.css';

export default class BusinessProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
        isdeleted: false,
        showBusinessImageUploader: false,
        showLocationForm: false,
        showBusinessUpdateForm: false,
    }
    this.deleteBusiness = this.deleteBusiness.bind(this);
  }

  componentWillMount(){
    var id = this.props.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data.negid);
      this.setState({
        business: res.data,
      });
    });
  }

  deleteBusiness() {
    var id = this.state.business.negid;
    console.log(id);
    axios.delete('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res);
      this.setState({
        isdeleted: true,
      },
    function() {
      console.log(this.state.business);
    });
    });
  }

  toggleBusinessImageUploader() {
    this.setState({
         showBusinessImageUploader: !this.state.showBusinessImageUploader
    });
  }

  toggleLocationForm() {
    this.setState({
         showLocationForm: !this.state.showLocationForm
    });
  }

  toggleBusinessUpdateForm() {
    this.setState({
         showBusinessUpdateForm: !this.state.showBusinessUpdateForm
    });
  }

  cerrarSesion() {
    localStorage.removeItem("business"+this.state.business.negid);
  }

  cambiarEstado() {
    var id = this.state.business.negid;
    if (this.state.business.negestado == "activo") {
      let datos = {
        negestado: "inactivo",
      }
      axios.put('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/estado', datos).then(res => {
        window.location.reload();
      })
    }
    if (this.state.business.negestado == "inactivo") {
      let datos = {
        negestado: "activo",
      }
      axios.put('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/estado', datos).then(res => {
        window.location.reload();
      })
    }
  }

  render() {

    var center = {
      lat: this.state.business.negLati,
      lng: this.state.business.negLong
    };
    var qrtext = String(this.state.business.negid);
    var url = "/myBusiness/" + this.state.business.negid + "/dashboard/";
    if (this.state.isdeleted) {
      return <Redirect to={{pathname: '/myBusiness'}} />
    }

    return (
      <div className="BusinessProfile">
        <section className="banner-area" id="home">
          <img className="businessImage" src={this.state.business.neglogo}/>
          {this.state.showBusinessUpdateForm ?
            <BusinessUpdateForm
                      closeBusinessUpdateForm = {this.toggleBusinessUpdateForm.bind(this)}
                      businessId = {this.state.business.negid}
            />
            : null
          }
          {this.state.showBusinessImageUploader ?
            <BusinessImageUpload
                      closeBusinessImageUploader = {this.toggleBusinessImageUploader.bind(this)}
                      id = {this.state.business.negid}
            />
            : null
          }
          {this.state.showLocationForm ?
            <BusinessLocationUpdateForm
                      closeLocationForm={this.toggleLocationForm.bind(this)}
                      businessId = {this.state.business.negid}
            />
            : null
          }
          <button className="BusinessImageUpdateButton" onClick={this.toggleBusinessImageUploader.bind(this)}><i className="far fa-image" aria-hidden="true"/></button>
          <button className="BusinessLocationButton" onClick={this.toggleLocationForm.bind(this)}><i className="fas fa-map-marker-alt" aria-hidden="true"/></button>
          <button className="BusinessUpdateButton" onClick={this.toggleBusinessUpdateForm.bind(this)}><i className="fas fa-edit" aria-hidden="true"/></button>
          <div className="overlay overlay-bg" />
          <button onClick={this.deleteBusiness} className="deleteBusinessButton">Eliminar Negocio</button>
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
                <i className="fas fa-map-marker-alt" aria-hidden="true"/>
                <p className="pt-10 pb-10 text-white">
                  Dirección: {this.state.business.negdireccion}
                </p>
                <i className="fas fa-envelope" aria-hidden="true"/>
                <p className="pt-10 pb-10 text-white">
                  Correo Electrónico: {this.state.business.negemail}
                </p>
                <button className="dashboardButton" onClick={() => this.cambiarEstado()}>{this.state.business.negestado}</button>
                <a href={url} className="dashboardButton">Dashboard</a>
                <a href="/myBusiness" className="dashboardButton" onClick={() => this.cerrarSesion()}>Cerrar Sesión de Negocio</a>
              </div>
            </div>
          </div>
        </section>
        <BusinessMap
          center = {center}
        />
        <QrCodeComponent
          businessId = {qrtext}/>
      </div>
    );
  }

};
