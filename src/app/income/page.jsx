"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleActive } from "@/redux/slice/toggleSlice";
import { setCategory } from "@/redux/slice/categorySlice";
import IncomeSource from "@/components/IncomeSource";
import IncomeSourcesChart from "@/features/IncomeSourcesChart";

const Income = () => {
  const data = {
    category: "Total Income",
    summary: "Total income from all sources",
    amount: 7500,
    sources: [
      { source: "Salary", amount: 5000 },
      { source: "Freelancing", amount: 1500 },
      { source: "Investments", amount: 1000 },
    ],
  };
  const { totalIncome, sources } = useSelector((state) => state.income);

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(toggleActive());
    dispatch(setCategory(data.category));
  };

  return (
    <div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">{data.category}</h2>
        <p className="text-gray-500">{data.summary}</p>
        <p className="mt-4 text-2xl font-bold">${totalIncome}</p>
        <ul className="mt-4">
          {sources.map((source, index) => (
            <li className="flex justify-between" key={index}>
              <span> {source.source}</span>
              <span>${source.amount}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Edit
        </button>
      </div>
      <div className="m-4 flex space-x-2 flex-wrap">
        <IncomeSource />
        <IncomeSourcesChart />
      </div>
    </div>
  );
};

export default Income;
