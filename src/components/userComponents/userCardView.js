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
      <div className="profileContainer">
        <div className="fb-profile">
          <img align="left" className="fb-image-lg" src="http://www.fbcovers.alegriphotos.com/covers/Metal-blur1781.jpg" alt="Profile image example" />
          <img align="left" className="fb-image-profile thumbnail" src={JSON.parse(localStorage.getItem("userInfo")).picture} alt="Profile image example" />
          <div className="fb-profile-text">
            <h1>{JSON.parse(localStorage.getItem("userInfo")).name}</h1>
            <p>{this.state.userData.usudetalle}</p>
            <p>Campo sin especificar</p>
            <p>Correo: {JSON.parse(localStorage.getItem("userInfo")).email}</p>
            <p>Campo sin especificar</p>
            <p>Campo sin especificar</p>
          </div>
        </div>
      </div>
    );
  }

};
