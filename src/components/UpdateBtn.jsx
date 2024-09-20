import React from "react";

const UpdateBtn = ({ updatedItem }) => {
  return (
    <button
      className="m-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
      onClick={(e) => updatedItem(e)} // Pass the event directly
    >
      Update
    </button>
  );
};

export default UpdateBtn;
