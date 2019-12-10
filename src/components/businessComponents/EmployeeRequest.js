import React, { Component } from 'react';
import axios from 'axios';
import './businessStyles/EmployeeRequestStyle.css';

export default class EmployeeRequest extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
        solinombre: "",
        soliapellido: "",
        solicelular: "",
        soliemail: "",
        solimensaje: "",
        soliimage: "",
    }
    this.changeName = this.changeName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(e) {
    this.setState({
      solinombre: e.target.value
    });
  }

  changeLastName(e) {
    this.setState({
      soliapellido: e.target.value
    });
  }

  changeEmail(e) {
    this.setState({
      soliemail: e.target.value
    });
  }

  changePhone(e) {
    this.setState({
      solicelular: e.target.value
    });
  }

  changeMessage(e) {
    this.setState({
      solimensaje: e.target.value
    });
  }

  componentWillMount(){
    console.log(this.props);
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + this.props.businessId + '/').then(res => {
      console.log(res.data);
      this.setState({
        business: res.data,
      });
    });
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + JSON.parse(localStorage.getItem("userInfo")).userID + '/').then(res => {
      console.log(res.data);
      this.setState({
        solinombre: res.data.usunombre,
        soliapellido: res.data.usuapellido,
        solicelular: res.data.usucelular,
        soliemail: res.data.usuemail,
        soliimage: res.data.usufoto,
      },
    function() {
    });
    });
  }

  handleSubmit(event) {
    var data = {
      solinombre: this.state.solinombre,
      soliapellido: this.state.soliapellido,
      solicelular: this.state.solicelular,
      soliemail: this.state.soliemail,
      solimensaje: this.state.solimensaje,
      soliusu: JSON.parse(localStorage.getItem("userInfo")).userID,
      solineg: this.props.businessId,
      soliimage: this.state.soliimage,
    }
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/solicitudes/', data).then(res => {
      console.log(res);
      window.location.reload();
    })
  }

  render() {
    return (
      <div className="container-contact100">
        <div className="wrap-contact100">
          <div className="contact100-form validate-form">
            <span className="contact100-form-title">
              ¡Postula a un empleo YA!
            </span>
            <label className="label-input100" htmlFor="first-name">Dinos tu nombre *</label>
            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
              <input id="first-name" className="input100" type="text" name="first-name" placeholder="Nombres" defaultValue={this.state.solinombre} onChange={this.changeName}/>
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
              <input className="input100" type="text" name="last-name" placeholder="Apellidos" defaultValue={this.state.soliapellido} onChange={this.changeLastName}/>
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="email">Ingresa tu correo electrónico *</label>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" defaultValue={this.state.soliemail} onChange={this.changeEmail}/>
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="phone">Ingresa tu número telefónico</label>
            <div className="wrap-input100">
              <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000" defaultValue={this.state.solicelular} onChange={this.changePhone}/>
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="message">Mensaje adicional *</label>
            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea id="message" className="input100" name="message" placeholder="Write us a message" defaultValue={""} onChange={this.changeMessage}/>
              <span className="focus-input100" />
            </div>
            <div className="container-contact100-form-btn">
              <button onClick={this.handleSubmit} className="contact100-form-btn">
                Enviar Solicitud
              </button>
            </div>
          </div>
          <div className="contactInfo" style={{backgroundImage: 'url("https://colorlib.com/etc/cf/ContactFrom_v17/images/bg-01.jpg")'}}>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-map-marker-alt"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  Dirección
                </span>
                <span className="content1">
                  {this.state.business.negdireccion}
                </span>
              </div>
            </div>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-phone"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  Teléfono
                </span>
                <span className="content2">
                  {this.state.business.negcelular}
                </span>
              </div>
            </div>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-envelope"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  Correo
                </span>
                <span className="content2">
                  {this.state.business.negemail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
