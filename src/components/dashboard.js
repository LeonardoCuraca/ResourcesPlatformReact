import React from 'react';
import './css/pagesStyle/userProfileStyle.css';

import NavBar from "./businessComponents/resourcesNavBar";
import AreaChart from "./chartComponents/AreaChart";
import PieChart from "./chartComponents/PieChart";
import SplineChart from "./chartComponents/SplineChart";

import EmployeesListView from "./businessComponents/EmployeesListView";

const UserProfile = () => {
  return (
    <div>
      <NavBar/>
      <div className="rightpart">
        <EmployeesListView/>
        <AreaChart/>
        <PieChart/>
        <SplineChart/>
      </div>
    </div>
  );
};

export default UserProfile;
