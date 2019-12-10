import React, { Component } from 'react';
import axios from 'axios';
import CanvasJSReact from '../../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class SplineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ventas: [],
    }
  }

  componentWillMount() {
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/'+ this.props.businessId +'/').then(res => {
      console.log(res.data);
      this.setState({
        ventas: res.data.venta,
      },
    function() {
      console.log(this.state.ventas);
    });
    });
  }

  render() {

    var dps = []
    var list = this.state.ventas;
    console.log(list.length);

    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
      dps.push({x: new Date(list[i].venfecha), y: list[i].ventotal});
    }

    console.log(dps);

    const options = {
			animationEnabled: true,
			title:{
				text: "Ventas Totales"
			},
			axisX: {
				valueFormatString: "DDD"
			},
			axisY: {
				title: "Ventas (en soles)",
				prefix: "S/",
				includeZero: false
			},
			data: [{
				yValueFormatString: "S/#,###",
				xValueFormatString: "DDD",
				type: "spline",
				dataPoints: dps
			}]
		}

    return (
  		<div>
  			<CanvasJSChart options = {options}/>
  		</div>
		);
  }
}
