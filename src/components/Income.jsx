"use client";
import { setCategory } from "@/redux/slice/categorySlice";
import { toggleActive } from "@/redux/slice/toggleSlice";
import { useDispatch, useSelector } from "react-redux";

const Income = ({ data }) => {
  const { totalIncome, sources } = useSelector((state) => state.income);

  const dispatch = useDispatch();

  // Function to dispatch multiple actions
  const handleButtonClick = () => {
    dispatch(toggleActive());
    dispatch(setCategory(data.category));
  };

  return (
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
  );
};

export default Income;
