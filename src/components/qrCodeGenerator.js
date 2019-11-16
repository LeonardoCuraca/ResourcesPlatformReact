import React, { Component } from 'react';
import QRCode from 'qrcode.react';

export default class Facebook extends Component {
  render(){

    return(
      <div>
        <QRCode
          value='Jhovin'
          size={300}
        />
      </div>
    )
  }
}
