import React, { Component } from 'react';
import axios from 'axios';
import UserDataUpdateForm from './UserDataUpdateForm';
import ImageUpload from './ImageUpload';
import './userStyles/userCardViewStyle.css';

export default class UserCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userData: [],
        showPopup: false,
        showImageUploader: false,
    }
  }

  togglePopup() {
    this.setState({
         showPopup: !this.state.showPopup
    });
  }

  toggleImageUploader() {
    this.setState({
         showImageUploader: !this.state.showImageUploader
    });
  }

  componentWillMount(){
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        userData: res.data,
      });
    });
  }

  render() {
    return (
      <div className="profileBack">
        <div className="profileContainer">
          {this.state.showPopup ?
            <UserDataUpdateForm
                      closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
          {this.state.showImageUploader ?
            <ImageUpload
                      closeImageUploader={this.toggleImageUploader.bind(this)}
            />
            : null
          }
          {/* banner */}
          <div className="fb-profile">
            <button className="profileEditButton" onClick={this.togglePopup.bind(this)}><i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"/></button>
            <img align="left" className="fb-image-lg" src="http://www.fbcovers.alegriphotos.com/covers/Metal-blur1781.jpg" alt="Profile image example" />
            <img onClick={this.toggleImageUploader.bind(this)} align="left" className="fb-image-profile thumbnail" src={this.state.userData.usufoto} alt="Profile image example" />
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
      </div>
    );
  }

};
