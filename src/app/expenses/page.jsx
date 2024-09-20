import Expense from "@/components/Expense";
import SpendingOverview from "@/components/SpendingOverview";
import SpendingHabitsChart from "@/features/SpendingHabitsChart";
import React from "react";

const page = () => {
  return (
    <div>
      <Expense />
      <div className="m-4 flex space-x-2 flex-wrap" style={{ gap: "20px" }}>
        <SpendingHabitsChart />
        <SpendingOverview />
      </div>
    </div>
  );
};

export default page;
