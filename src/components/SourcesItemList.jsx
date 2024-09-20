import { useDispatch, useSelector } from "react-redux";
import {
  updateIncomeSource,
  deleteIncomeSource,
} from "@/redux/slice/incomeSlice";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";

const SourcesItemList = () => {
  const dispatch = useDispatch();
  const sources = useSelector((state) => state.income.sources);

  const [editedSources, setEditedSources] = useState([]);

  useEffect(() => {
    setEditedSources(sources);
  }, [sources]);

  const handleDelete = (name) => {
    dispatch(deleteIncomeSource(name));
  };

  const handleInputChange = (index, field, value) => {
    const updatedSources = editedSources.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setEditedSources(updatedSources);
  };

  const handleUpdate = (e, index) => {
    e.preventDefault();
    const { source, amount } = editedSources[index];
    const oldSource = sources[index].source;

    dispatch(updateIncomeSource({ oldSource, source, amount: Number(amount) }));
  };

  return (
    <ul
      className="mt-4 space-y-4 scrollbar-hidden"
      style={{ maxHeight: "30vh", overflow: "auto" }}
    >
      {editedSources.map((item, index) => (
        <li
          className="flex items-center px-4 py-2 custom-flex-container"
          key={index}
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={item.source}
            onChange={(e) => handleInputChange(index, "source", e.target.value)}
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
          <button
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={(e) => handleUpdate(e, index)}
          >
            Update
          </button>
          <DeleteBtn
            deleteItem={(e) => handleDelete(item.source)}
            itemName={item.source}
          />
        </li>
      ))}
    </ul>
  );
};

export default SourcesItemList;
