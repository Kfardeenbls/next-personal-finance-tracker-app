"use client";
import { useSelector } from "react-redux";

export default function MonthlyTracking({ data }) {
  const { totalIncome } = useSelector((state) => state.income);
  const { totalExpenses } = useSelector((state) => state.expenses);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Monthly Tracking</h2>
      <p className="text-gray-500">Track your monthly financial performance.</p>

      <div className="mt-4">
        {totalIncome && (
          <div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">{data[0].category}</h3>
              <p className="text-blue-600 font-semibold">
                Amount: ${totalIncome}
              </p>
            </div>
          </div>
        )}
        {totalExpenses && (
          <div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">{data[1].category}</h3>
              <p className="text-blue-600 font-semibold">
                Amount: ${totalExpenses}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
