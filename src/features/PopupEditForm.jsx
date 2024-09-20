"use client";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "@/components/AddForm";
import { useState } from "react";
import AddBtn from "@/components/AddBtn";
import ItemList from "@/components/SourcesItemList";
import ItemListExpenses from "@/components/ItemListExpenses";
import SourcesItemList from "@/components/SourcesItemList";
import { toggleActive } from "@/redux/slice/toggleSlice";

const PopupEditForm = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const { totalIncome, sources } = useSelector((state) => state.income);

  const handleShow = (e) => {
    e.preventDefault();
    setShowAddForm(true);
  };

  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.toggle.isActive);

  const handleCloseBtn = () => {
    dispatch(toggleActive());
    setShowAddForm(false);
  };

  const financialSummary = [
    {
      category: "Total Income",
      summary: "Total income from all sources",
      amount: 7500,
      sources: [
        { source: "Salary", amount: 5000 },
        { source: "Freelancing", amount: 1500 },
        { source: "Investments", amount: 1000 },
      ],
    },
    {
      category: "Total Expenses",
      summary: "Total monthly expenses",
      amount: 4500,
      breakdown: [
        { type: "Rent", amount: 1500 },
        { type: "Groceries", amount: 800 },
        { type: "Transport", amount: 300 },
        { type: "Entertainment", amount: 600 },
        { type: "Utilities", amount: 400 },
        { type: "Insurance", amount: 300 },
        { type: "Dining Out", amount: 600 },
      ],
    },
    {
      category: "Total Savings",
      summary: "Total savings after expenses",
      amount: 3000,
    },
    {
      category: "Spending Habits",
      summary: "Breakdown of where the money is spent",
      habits: [
        { habit: "Essentials (Rent, Groceries, Utilities)", percentage: 60 },
        { habit: "Leisure (Entertainment, Dining Out)", percentage: 27 },
        { habit: "Savings & Investments", percentage: 13 },
      ],
    },
    {
      category: "Income Sources",
      summary: "Breakdown of income sources",
      sources: [
        { source: "Primary Job (Salary)", percentage: 67 },
        { source: "Side Hustles (Freelancing)", percentage: 20 },
        { source: "Passive Income (Investments)", percentage: 13 },
      ],
    },
  ];

  const categoryData = financialSummary.find(
    (item) => item.category === selectedCategory
  );

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(17, 24, 39, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  };

  const inlineStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "32rem",
    margin: "0 1rem",

    // Responsive margins
    "@media (min-width: 640px)": { margin: "0 1.5rem" },
    "@media (min-width: 768px)": { margin: "0 2rem" },
    "@media (min-width: 1024px)": { margin: "0 2.5rem" },
    "@media (min-width: 1280px)": { width: "66.6667%" },
    "@media (min-width: 1536px)": { width: "50%" },
  };

  const buttonStyle = {
    backgroundColor: "#48bb78",
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    width: "100%",
    marginTop: "1rem",
  };

  return (
    <>
      {isActive && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          style={popupStyle}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:w-2/3 2xl:w-1/2 popup-animation"
            style={inlineStyle}
          >
            <button
              onClick={handleCloseBtn}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 popup-animation-out"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Edit Form
            </h2>
            <form>
              {categoryData && (
                <>
                  <h2 className="text-xl  text-center font-semibold">
                    {categoryData.category}
                  </h2>

                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Amount
                    </label>
                    <span className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      {totalIncome}
                    </span>
                  </div>

                  {categoryData.sources && (
                    <div className="mb-4">
                      <label
                        htmlFor="sources"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sources
                      </label>
                      <SourcesItemList />
                    </div>
                  )}

                  {categoryData.breakdown && (
                    <div className="mb-4">
                      <label
                        htmlFor="breakdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Breakdown
                      </label>
                      <ItemListExpenses />
                    </div>
                  )}

                  {categoryData.habits && (
                    <div className="mb-4">
                      <label
                        htmlFor="habits"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Habits
                      </label>
                      <ItemList data={habits} />
                    </div>
                  )}
                </>
              )}
              <button
                type="botton"
                onClick={handleShow}
                style={{
                  display: `${showAddForm ? "none" : "block"}`,
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-4"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#22c55e")
                }
                onFocus={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(59, 130, 246, 0.5)")
                }
                onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <AddBtn showAddForm />
                Add
              </button>

              {showAddForm && <AddForm />}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupEditForm;
