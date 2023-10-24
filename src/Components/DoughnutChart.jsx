import React from "react";
import { Doughnut } from "react-chartjs-2";
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

// tge config
const options = {
  indexAxis: "x", /// find
  responsive: true,
  elements: {
    bar: {
      borderWidth: 2,
    },
    LinearScale: 2,
  },
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Bar chat, checking",
    },
  },
};

// data
const data = {
  labels: ["Monday", "Teusday", "Wednesday", "Thirsday", "Friday"],
  datasets: [
    {
      label: "The thired",
      data: [1, 2, 3, 4, 5, 2],
      borderColor: "",
      backgroundColor: "blue",
    },
    {
      label: "the first",
      data: [1, 4, 3, 4, 5, 5],
      borderColor: "",
      backgroundColor: "yellow",
    },
    {
      label: "the second",
      data: [5, 2, 1, 4, 5, 4],
      borderColor: "",
      backgroundColor: "red",
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="h-[300px] w-[100%]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
