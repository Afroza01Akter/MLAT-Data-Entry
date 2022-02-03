import React from "react";
import Table from "./component/table/Table";
import Cards from "./component/card/Cards";
import MainAreaCharts from "./component/chart/MainAreaCharts";

const Dashboard = () => {
  return (
    <div>
      <Cards />
      <MainAreaCharts />
      <Table />
    </div>
  );
};

export default Dashboard;
