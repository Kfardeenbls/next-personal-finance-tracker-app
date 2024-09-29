import { useDispatch, useSelector } from "react-redux";
import { editExpense, deleteExpense } from "@/redux/slice/expenseSlice";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";

const ItemListExpenses = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.breakdown);

  const [editedExpenses, setEditedExpenses] = useState([]);

  useEffect(() => {
    setEditedExpenses(expenses);
  }, [expenses]);

  const handleDelete = (type) => {
    dispatch(deleteExpense(type));
  };

  const handleInputChange = (index, field, value) => {
    const updatedExpenses = editedExpenses.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setEditedExpenses(updatedExpenses);
  };

  const handleUpdate = (e, index) => {
    e.preventDefault();
    const { type, amount } = editedExpenses[index];
    const oldType = expenses[index].type; // Old expense type

    dispatch(editExpense({ oldType, type, amount: Number(amount) }));
  };

  return (
    <ul
      className="mt-4 space-y-4 scrollbar-hidden"
      style={{ maxHeight: "30vh", overflow: "auto" }}
    >
      {editedExpenses.map((item, index) => (
        <li
          className="flex items-center px-4 py-2 custom-flex-container"
          key={index}
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>{index + 1 + "."}</span>
          <input
            type="text"
            value={item.type}
            onChange={(e) => handleInputChange(index, "type", e.target.value)}
            className="flex-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 m-2"
          />
          <div style={{ margin: "10px 0" }}>
            $
            <input
              type="number"
              value={item.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", e.target.value)
              }
              className="w-24 border border-gray-300 rounded-md shadow-sm p-2 m-2"
              style={{ margin: "0 10px" }}
            />
          </div>
          <UpdateBtn updatedItem={(e) => handleUpdate(e, index)} />

          <DeleteBtn
            deleteItem={(e) => handleDelete(item.type)}
            itemName={item.type}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemListExpenses;
