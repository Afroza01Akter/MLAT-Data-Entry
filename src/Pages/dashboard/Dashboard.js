import React from 'react';
// import SideBar from '../../Components/sidebar/SideBar';
import Cards from "./component/card/Cards";
import MainAreaCharts from "./component/chart/MainAreaCharts";


const Dashboard = () => {
  return (<div>
     {/* <SideBar/> */}

      <Cards/>
      <MainAreaCharts/>
  </div>)
};

export default Dashboard;
