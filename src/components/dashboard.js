import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import ResourcesNavBar from "./businessComponents/resourcesNavBar";
import AreaChart from "./chartComponents/AreaChart";
import PieChart from "./chartComponents/PieChart";
import SplineChart from "./chartComponents/SplineChart";

import EmployeesListView from "./businessComponents/EmployeesListView";
import ProductsListView from "./businessComponents/ProductsListView";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <ResourcesNavBar
          bid = {this.props.match.params.businessId}/>
        <div className="rightpart">
          <section id="products">
            <ProductsListView
              businessId = {this.props.match.params.businessId}/>
          </section>
          <section id="employees">
            <EmployeesListView
              businessId = {this.props.match.params.businessId}/>
          </section>
          <AreaChart
            businessId = {this.props.match.params.businessId}/>
          <PieChart/>
          <SplineChart/>
        </div>
      </div>
    );
  }
};
