import React from "react";
// import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import "./Chart.css";
import Chart from "react-apexcharts";

// const data =[
//   {
//     name: 'Java',
//     student: 192,
//     fees: 400
//   },
//   {
//     name: 'JavaScript',
//     student: 240,
//     fees: 300
//   },
//   {
//     name: 'HTML',
//     student: 251,
//     fees: 200
//   },
//   {
//     name: 'CSS',
//     student: 191,
//     fees: 300
//   },
// ]

const MainAreaCharts = () => {
  return (
    <div>
      <div className="charts">
        <div className="charts__content">
          <Chart
            type="bar"
            height={400}
            series={[
              {
                name: "Company1",
                data: [100, 200, 232, 132, 422, 132],
              },
            ]}
            options={{}}
          />
        </div>
        <div className="charts__content" id="charts__content">
          <div className="test">
            <Chart
              type="pie"
              height={400}
              series={[100, 200, 232, 132, 422, 132]}
              options={{}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAreaCharts;
