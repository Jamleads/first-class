import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  responsive: true,
  elements: {
    bar: {
      borderWidth: 5,
    },
    LinearScale: 10,
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "The barChat we did and it gave problem",
    },
  },
};
const data = {
  labels: [
    "sept10",
    "sept11",
    "sept12",
    "sept13",
    "sept14",
    "sept15",
    "sept16",
  ],
  datasets: [
    {
      label: "sales",
      data: [20, 100, 40, 60, 80, 60, 10],
      //   borderColor: "red",
      backgroundColor: "blue",
    },
    {
      label: "techeis",
      data: [50, 70, 70, 60, 20, 60, 50],
      //   borderColor: "red",
      backgroundColor: "#000",
    },
    {
      label: "foodies",
      data: [50, 70, 70, 60, 20, 60, 50],
      //   borderColor: "red",
      backgroundColor: "red",
    },
    {
      label: "foodies",
      data: [50, 70, 70, 60, 20, 60, 50],
      //   borderColor: "red",
      backgroundColor: "yellow",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="flex w-[90%]">
      <div className="h-[310px] w-[100%]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
