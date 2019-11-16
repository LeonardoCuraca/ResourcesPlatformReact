import React, { Component } from 'react';
import axios from 'axios';
import './userStyles/userCardViewStyle.css';

export default class UserCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userData: [],
    }
  }

  componentWillMount(){
    var id = 3;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        userData: res.data,
      });
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img src={this.state.userData.usufoto} />
            </div>
            <a href="cv/cv-1.pdf" target="cv">
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true" />
                <span className="text-download">SUBIR CV</span>
              </div>
            </a>
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2 className="userName">{JSON.parse(localStorage.getItem("userInfo")).name}</h2>
              <h3>ESPECIALIDAD POR ESPECIFICAR</h3>
              <p>{this.state.userData.usudetalle}</p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Edad</span>
                      <span className="info">Por especificar</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Dirección</span>
                      <span className="info">{this.state.userData.usudireccion}</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Correo</span>
                      <span className="info">{JSON.parse(localStorage.getItem("userInfo")).email}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Celular</span>
                      <span className="info">{this.state.userData.usucelular}</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">SitioWeb</span>
                      <span className="info">Por especificar</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nacionalidad</span>
                      <span className="info">Por especificar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
