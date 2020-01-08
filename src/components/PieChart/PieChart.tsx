import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [44, 55, 13, 43, 22];

interface Props {
  title?: string | undefined;
}

const PieChart: React.FC<Props> = ({title}) => {
  const options = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    chart: {
      width: 480,
      height: 480
    },
    title: {
      text: title
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        type="pie"
        series={series}
        height="240"
        width="400"
      />
    </React.Fragment>
  );
};

export default PieChart;
