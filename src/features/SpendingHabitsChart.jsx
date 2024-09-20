"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const SpendingHabitsChart = () => {
  const { habits } = useSelector((state) => state.spendingHabits);
  const chartData = {
    labels: habits.map((habit) => habit.habit),
    datasets: [
      {
        label: "% of Spending",
        data: habits.map((habit) => habit.percentage),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
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
    <div
      className="flex-1 flex justify-center items-center "
      style={{
        width: "100%",
        height: "400px",
        flexDirection: "column",
        gap: "20px",
        margin: "auto 0",
      }}
    >
      <h3 className="text-lg font-semibold">Spending Habits</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default SpendingHabitsChart;
