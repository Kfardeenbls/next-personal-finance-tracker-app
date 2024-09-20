import React from "react";

const DeleteBtn = ({ deleteItem, itemName }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "#f56565",
        color: "#ffffff",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s, box-shadow 0.2s",
        outline: "none",
        margin: "0 10px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e53e3e")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f56565")}
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(239, 68, 68, 0.5)")
      }
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      onClick={() => deleteItem(itemName)}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
