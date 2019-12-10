import React, { Component } from 'react';
import axios from 'axios';
import CanvasJSReact from '../../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class AreaChart extends Component {

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
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Total de Ventas"
			},
			axisY: {
				title: "Ingresos Totales (En Soles)",
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "DDD",
				yValueFormatString: "S/#,###",
				dataPoints: dps
			}
			]
		}

    return (
  		<div>
  			<CanvasJSChart options = {options}/>
  		</div>
		);
  }
}
