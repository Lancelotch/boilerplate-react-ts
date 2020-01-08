import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "Sun",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Mon",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Tue",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Wed",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Thu",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Fri",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  },
  {
    name: "Sat",
    data: [10, 30, 20, 40, 10, 30, 20, 40, 10]
  }
];

interface Props {
  title?: string | undefined;
}

const HeatMapChart: React.FC<Props> = ({ title }) => {
  const options = {
    chart: {
      toolbar: {
        tools: {
          download: false
        }
      }
    },
    legend: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: title,
      margin: -8
    }
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height="240"
        width="400"
      />
    </React.Fragment>
  );
};

export default HeatMapChart;
