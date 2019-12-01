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
import './businessStyles/BusinessProfileStyle.css';

export default class BusinessProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
        isdeleted: false,
        showBusinessImageUploader: false,
    }
    this.deleteBusiness = this.deleteBusiness.bind(this);
  }

  componentWillMount(){
    console.log(this.props.match.params.businessId);
    var id = this.props.match.params.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data);
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
      });
    })
  }

  toggleBusinessImageUploader() {
    this.setState({
         showBusinessImageUploader: !this.state.showBusinessImageUploader
    });
  }

  render() {
    if (this.state.isdeleted) {
      return <Redirect to={{pathname: '/myBusiness'}} />
    }
    return (
      <section className="banner-area" id="home">
        <img className="businessImage" src={this.state.business.neglogo}/>
        {this.state.showBusinessImageUploader ?
          <BusinessImageUpload
                    closeBusinessImageUploader={this.toggleBusinessImageUploader.bind(this)}
                    id = {this.state.business.negid}
          />
          : null
        }
        <button className="BusinessImageUpdateButton" onClick={this.toggleBusinessImageUploader.bind(this)}><i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"/></button>
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
              <a href="/dashboard" className="primary-btn text-uppercase">Dashboard</a>
              <button onClick={this.deleteBusiness} className="primary-btn text-uppercase">Eliminar Negocio</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

};
