import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncomeSource } from "@/redux/slice/incomeSlice";
import { addExpense } from "@/redux/slice/expenseSlice";
import AddBtn from "./AddBtn";

const AddForm = () => {
  const [income, setIncome] = useState({ source: "", amount: "" });
  const [expense, setExpense] = useState({ type: "", amount: "" });
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCategory === "Total Income" && income.source && income.amount) {
      dispatch(
        addIncomeSource({
          source: income.source,
          amount: Number(income.amount),
        })
      );
      setIncome({ source: "", amount: "" });
    } else if (
      selectedCategory === "Total Expenses" &&
      expense.type &&
      expense.amount
    ) {
      dispatch(
        addExpense({ type: expense.type, amount: Number(expense.amount) })
      );
      setExpense({ type: "", amount: "" });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {selectedCategory === "Total Income" ? (
        <>
          <input
            type="text"
            value={income.source}
            onChange={(e) => setIncome({ ...income, source: e.target.value })}
            placeholder="Enter source"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            value={income.amount}
            onChange={(e) => setIncome({ ...income, amount: e.target.value })}
            placeholder="Enter amount"
            className="border border-gray-300 rounded-md p-2"
          />
        </>
      ) : (
        <>
          <input
            type="text"
            value={expense.type}
            onChange={(e) => setExpense({ ...expense, type: e.target.value })}
            placeholder="Enter type"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            placeholder="Enter amount"
            className="border border-gray-300 rounded-md p-2"
          />
        </>
      )}

      <AddBtn handleSubmit={handleSubmit} showAddForm={false} />
    </div>
  );
};

export default AddForm;
