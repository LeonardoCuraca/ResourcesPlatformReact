import React, { Component } from 'react';
import QRCode from 'qrcode.react';

export default class QrCodeComponent extends Component {
  render(){
    console.log(this.props.businessId);
    return(
      <div style={{marginTop: "32px", height: "100vh", textAlign: "center"}}>
        <div style={{fontSize: "32px", marginBottom: "64px"}}>Tus empleados podrán escanear para poder vender tus productos</div>
        <QRCode
          value={this.props.businessId}
          size={500}
        />
      </div>
    )
  }
}
