import React, { Component } from 'react';
import axios from 'axios';
import {storage} from '../../firebase';

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      userData: [],
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
    var id = 3;
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
    });
  }



  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    )
  }

}

export default ImageUpload;
