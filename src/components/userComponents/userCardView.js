import React, { Component } from 'react';
import axios from 'axios';
import UserDataUpdateForm from './UserDataUpdateForm';
import ImageUpload from './ImageUpload';
import CoverUpload from './CoverUpload';
import './userStyles/userCardViewStyle.css';

export default class UserCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showPopup: false,
        showImageUploader: false,
        showCoverUploader: false,
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

  toggleCoverUploader() {
    this.setState({
         showCoverUploader: !this.state.showCoverUploader
    });
  }

  render() {
    return (
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
        {this.state.showCoverUploader ?
          <CoverUpload
                    closeCoverUploader={this.toggleCoverUploader.bind(this)}
          />
          : null
        }
        {/* banner */}
        <div className="fb-profile">
          <button className="profileEditButton" onClick={this.togglePopup.bind(this)}><i className="fas fa-user-edit" aria-hidden="true"/></button>
          <img align="left" className="fb-image-lg" onClick={this.toggleCoverUploader.bind(this)} src={this.props.userData.usuPortada} alt="Profile image example"/>
          <div className="imageContainer">
            <img title="Actualizar Foto de Perfil" onClick={this.toggleImageUploader.bind(this)} align="left" className="fb-image-profile thumbnail" src={this.props.userData.usufoto} alt="Profile image example" />
          </div>
          <div className="fb-profile-text">
            <h1>{this.props.userData.usunombre} {this.props.userData.usuapellido}</h1>
            <h2>{this.props.userData.usudetalle}</h2>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true"/> {this.props.userData.usudireccion}</p>
            <p><i className="fas fa-envelope" aria-hidden="true"/> {this.props.userData.usuemail}</p>
            <p><i className="fas fa-phone" aria-hidden="true"/> {this.props.userData.usucelular}</p>
          </div>
        </div>
      </div>
    );
  }

};
