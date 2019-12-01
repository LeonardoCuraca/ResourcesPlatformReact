import React, { Component } from 'react';
import axios from 'axios';
import {storage} from '../../firebase';

import './userStyles/loginStyle.css';
import './userStyles/ImageUploadStyle.css'

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      userData: [],
      uploaded: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () => {
    const image = this.state.image;
    if (image == null) {
      console.log("no image");
      return;
    }
    const uploadTask = storage.ref('images/' + image.name).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {

    },
    (error) => {
      console.log(error);
    },
    () => {
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        console.log(url);
        this.saveImageOnDataBase(url);
      });
    });
  }

  saveImageOnDataBase(url) {
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      let datos = {
        usunombre: res.data.usunombre,
        usuapellido: res.data.usuapellido,
        usuemail: res.data.usuemail,
        usugenero: res.data.usugenero,
        usudetalle: res.data.usudetalle,
        usudireccion: res.data.usudireccion,
        usufoto: url,
        usucelular: res.data.usucelular,
      }
      console.log(datos.usufoto);
      axios.put('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/', datos);
      this.setState({
        uploaded: true,
      });
    });
  }



  render() {
    return (
      <div className="back">
        <div className="box">
          {this.state.uploaded ?
            <h2>Perfil Actualizado</h2>
            : null
          }
          {!this.state.uploaded ?
            <h2>Actualizar Foto de Perfil</h2>
            : null
          }
          <input type="file" name="file" id="file" className="inputfile" onChange={this.handleChange} />
          <label><i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"></i>Choose a file</label>
          {this.state.image ?
            <label className="uploadButton" onClick={this.handleUpload}>Upload</label>
            : null
          }
          <br/>
          {this.state.uploaded ?
            <a href="/userProfile">close me</a>
            : null
          }
          {!this.state.uploaded ?
            <a onClick={this.props.closeImageUploader}>close me</a>
            : null
          }
        </div>
      </div>
    )
  }

}

export default ImageUpload;
