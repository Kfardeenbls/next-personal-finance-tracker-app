import React from "react";

const AddBtn = ({ handleSubmit, showAddForm }) => {
  return (
    <button
      type="submit"
      onClick={(e) => handleSubmit(e)}
      style={{
        display: `${showAddForm ? "none" : "block"}`,
      }}
      className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-4"
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.5)")
      }
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      Add
    </button>
  );
};

export default AddBtn;
