import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["일일확진자", "인구10만명당확진", "신규입원"];

interface propTypes {
  cntConfirmations: number;
  rateConfirmations: number;
  cntHospitalizations: number;
}

const Barchart = ({
  cntConfirmations,
  rateConfirmations,
  cntHospitalizations,
}: propTypes) => {
  const data = {
    labels,
    datasets: [
      {
        label: "data",
        data: [cntConfirmations, rateConfirmations, cntHospitalizations],
        backgroundColor: ["#2A4E6E", "yellow", "black"],
      },
    ],
  };

  return (
    <div className="width_900">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Barchart;
