"use client";
import { useState } from "react";

export default function BudgetGoals({ savings }) {
  const [budgetGoal, setBudgetGoal] = useState(4000);
  const [newGoal, setNewGoal] = useState("");

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    if (newGoal) {
      setBudgetGoal(Number(newGoal));
      setNewGoal("");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Budget Goals</h2>
      <p className="text-gray-500">Track your budget goals</p>

      <div className="mt-4">
        <p>Total Savings: ${savings}</p>
        <p>Budget Goal: ${budgetGoal}</p>
        <p>
          {savings >= budgetGoal ? (
            <span className="text-green-500">On Track</span>
          ) : (
            <span className="text-red-500">Below Goal</span>
          )}
        </p>
      </div>

      <form onSubmit={handleGoalSubmit} className="mt-4">
        <label
          htmlFor="newGoal"
          className="block text-sm font-medium text-gray-700"
        >
          Set New Budget Goal:
        </label>
        <input
          type="number"
          id="newGoal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Update Goal
        </button>
      </form>
    </div>
  );
}
