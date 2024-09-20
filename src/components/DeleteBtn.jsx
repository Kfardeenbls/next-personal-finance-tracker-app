import React from "react";

const DeleteBtn = ({ deleteItem, itemName }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "#f56565", // Tailwind red-500
        color: "#ffffff", // White text color
        padding: "0.5rem 1rem", // Equivalent to px-4 py-2
        borderRadius: "0.375rem", // Equivalent to rounded-md
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s, box-shadow 0.2s",
        outline: "none",
        margin: "0 10px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e53e3e")} // Tailwind red-600
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f56565")} // Tailwind red-500
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(239, 68, 68, 0.5)")
      }
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      onClick={() => deleteItem(itemName)} // Use itemName
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
