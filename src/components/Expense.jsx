"use client";
import { setCategory } from "@/redux/slice/categorySlice";
import { toggleActive } from "@/redux/slice/toggleSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Expense() {
  const data = {
    category: "Total Expenses",
    summary: "Total monthly expenses",
  };
  const dispatch = useDispatch();
  const { totalExpenses, breakdown } = useSelector((state) => state.expenses);

  const handleButtonClick = () => {
    dispatch(toggleActive());
    dispatch(setCategory(data.category));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{data.category}</h2>
      <p className="text-gray-500">{data.summary}</p>
      <p className="mt-4 text-2xl font-bold">${totalExpenses}</p>

      <ul className="mt-4">
        {breakdown.map((expense, index) => (
          <li key={index} className="flex justify-between">
            <span>{expense.type}</span>
            <span>${expense.amount}</span>
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
  );
}
