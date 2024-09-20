import React, { useState } from "react";
import AddBtn from "./AddBtn";
import { addIncomeSource } from "@/redux/slice/incomeSlice";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const [updateList, setUpdateList] = useState({ source: "", amount: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateList.source && updateList.amount) {
      dispatch(
        addIncomeSource({
          source: updateList.source,
          amount: Number(updateList.amount),
        })
      );
      setUpdateList({ source: "", amount: "" });
    }
  };

  return (
    <div className="flex flex-col space-y-4 mt-4">
      <input
        type="text"
        value={updateList.source}
        onChange={(e) =>
          setUpdateList({ ...updateList, source: e.target.value })
        }
        placeholder="Enter source"
        className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />

      <input
        type="number"
        value={updateList.amount}
        onChange={(e) =>
          setUpdateList({ ...updateList, amount: e.target.value })
        }
        placeholder="Enter amount"
        className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />

      <AddBtn handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddForm;
