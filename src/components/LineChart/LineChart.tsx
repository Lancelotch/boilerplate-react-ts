import React from "react";
import Chart from "react-apexcharts";
import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";

const LineChart:React.FC =()=> {
  const state = {
    options: {
      chart: {
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        enabled: false
        // row: {
        //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //   opacity: 0.5
        // }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    },
    series: [
      {
        name: "computer",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "Handphone",
        data: [13, 46, 44, 59, 59, 82, 99, 111, 178]
      },
      {
        name: "Ipad",
        data: [5, 30, 67, 52, 72, 92, 109, 121, 158]
      }
    ]
  };

  return (
    <Card >
      <CardHeader
        title="Engagement Performance"
      />
      <Divider />
      <CardContent>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          height="280"
        />
      </CardContent>
    </Card>
  );
}

export default LineChart;