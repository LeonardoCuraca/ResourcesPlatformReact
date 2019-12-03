import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import NavBar from "./businessComponents/resourcesNavBar";
import AreaChart from "./chartComponents/AreaChart";
import PieChart from "./chartComponents/PieChart";
import SplineChart from "./chartComponents/SplineChart";

import EmployeesListView from "./businessComponents/EmployeesListView";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="rightpart">
          <EmployeesListView
            businessId = {this.props.match.params.businessId}/>
          <AreaChart/>
          <PieChart/>
          <SplineChart/>
        </div>
      </div>
    );
  }
};
