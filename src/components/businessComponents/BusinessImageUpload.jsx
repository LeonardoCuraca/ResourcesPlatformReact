import React, { Component } from 'react';
import axios from 'axios';
import {storage} from '../../firebase';

import './businessStyles/NewBusinessFormStyle.css';
import './businessStyles/BusinessImageUploadStyle.css'

class BusinessImageUpload extends Component {

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
    console.log(url);
    var id = this.props.id;
    let datos = {
      neglogo: url,
    }
    console.log(datos.neglogo);
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/foto' , datos).then(res => {
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
            <h2>Imagen Actualizada</h2>
            : null
          }
          {this.state.uploaded == "uploading" ?
            <h2>Actualizando...</h2>
            : null
          }
          {this.state.uploaded == "not uploaded" ?
            <h2>Actualizar Imagen del Negocio</h2>
            : null
          }
          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" className="inputfile" onChange={this.handleChange} />
          <label className="inputImage"><i className="fas fa-cloud-upload-alt mr-2" aria-hidden="true"></i>Choose a file</label>
          {this.state.image ?
            <label className="uploadButton" onClick={this.handleUpload}>Upload</label>
            : null
          }
          <br/>
          <button className="closeButton" onClick={this.props.closeBusinessImageUploader}>X</button>
        </div>
      </div>
    )
  }

}

export default BusinessImageUpload;
