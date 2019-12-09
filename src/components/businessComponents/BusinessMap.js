import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div style={{color: "red", fontSize: "24px"}}><i className="fas fa-map-marker-alt"></i></div>;

export default class BusinessMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
    }
  }

  render() {
    let map = (<div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyChtfum4Yf6_rdK9zT4zBnmGb40lUJnNV8' }}
        center={this.props.center}
        defaultZoom={19}
      >
        <AnyReactComponent
          lat={this.props.center.lat}
          lng={this.props.center.lng}
        />
      </GoogleMapReact>
    </div>);

    if (this.props.center.lat == 0 && this.props.center.lng == 0) {
      map = (<div style={{fontSize: "32px", color: 'red', textAlign: 'center', fontWeight: 600}}>MAPA NO ESPECIFICADO</div>)
    }

    return (
      <div>{map}</div>
    );
  }

};
