import React, { Component } from 'react';
import axios from 'axios';
import {storage} from '../../firebase';

import './userStyles/loginStyle.css';
import './userStyles/ImageUploadStyle.css'

export default class CoverUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploaded: "not uploaded",
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
    this.setState({
      uploaded: "uploading",
    });
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
    let datos = {
      usuPortada: url,
    }
    console.log(datos.usufoto);
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/portada', datos).then(res => {
      this.setState({
        uploaded: "uploaded",
      })
      window.location.reload()
    });
  }



  render() {
    return (
      <div className="back">
        <div className="box">
        {this.state.uploaded == "uploaded" ?
          <h2>Perfil Actualizado</h2>
          : null
        }
        {this.state.uploaded == "uploading" ?
          <h2>Actualizando...</h2>
          : null
        }
        {this.state.uploaded == "not uploaded" ?
          <h2>Actualizar Foto de Portada</h2>
          : null
        }
          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" className="inputfile" onChange={this.handleChange} />
          <label><i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"></i>Elija una Imagen</label>
          {this.state.image ?
            <label className="uploadButton" onClick={this.handleUpload}>Subir</label>
            : null
          }
          <br/>
          {this.state.uploaded == "not uploaded" ?
            <button className="closeButton" onClick={this.props.closeCoverUploader}>X</button>
            : null
          }
        </div>
      </div>
    )
  }

}
