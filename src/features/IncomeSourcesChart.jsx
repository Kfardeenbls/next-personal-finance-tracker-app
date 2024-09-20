"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeSourcesChart = () => {
  const sources = useSelector((state) => state.incomeSources.sources);
  const chartData = {
    labels: sources.map((source) => source.source),
    datasets: [
      {
        label: "% of Income",
        data: sources.map((source) => source.percentage),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ margin: "20px" }} className="flex-1">
      <div style={{ width: "100%", height: "400px" }}>
        {" "}
        <h3 className="text-lg font-semibold">Income Sources</h3>
        <Pie data={chartData} options={options} />{" "}
      </div>
    </div>
  );
};

export default IncomeSourcesChart;
