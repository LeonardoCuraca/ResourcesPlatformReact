import React, { Component } from 'react';
import axios from 'axios';
import UserDataUpdateForm from './UserDataUpdateForm';
import ImageUpload from './ImageUpload';
import './userStyles/userCardViewStyle.css';

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userData: [],
    }
  }

  componentWillMount(){
    var id = this.props.userId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        userData: res.data,
      });
    });
  }

  render() {
    return (
      <div className="profileContainer">
        <div className="fb-profile">
          <img align="left" className="fb-image-lg" src="http://www.fbcovers.alegriphotos.com/covers/Metal-blur1781.jpg" alt="Profile image example"/>
          <div className="imageContainer">
            <img align="left" className="fb-image-profile-view thumbnail" src={this.state.userData.usufoto} alt="Profile image example" />
          </div>
          <div className="fb-profile-text">
            <h1>{this.state.userData.usunombre} {this.state.userData.usuapellido}</h1>
            <h2>{this.state.userData.usudetalle}</h2>
            <p>Dirección: {this.state.userData.usudireccion}</p>
            <p>Correo: {this.state.userData.usuemail}</p>
            <p>Celular: {this.state.userData.usucelular}</p>
            <p>Sexo: {this.state.userData.usugenero}</p>
          </div>
        </div>
      </div>
    );
  }

};
