import Income from "@/components/Income";
import Expense from "@/components/Expense";
import SpendingOverview from "@/components/SpendingOverview";
import IncomeSource from "@/components/IncomeSource";
import BudgetGoals from "@/components/BudgetGoals";
import MonthlyTracking from "@/components/MonthlyTracking";
import SpendingHabitsChart from "@/features/SpendingHabitsChart";
import IncomeSourcesChart from "@/features/IncomeSourcesChart";

export default function Dashboard() {
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

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Income data={financialSummary[0]} />

        <Expense data={financialSummary[1]} />

        <SpendingHabitsChart data={financialSummary[3]} />

        <SpendingOverview data={financialSummary[3]} />

        <IncomeSource data={financialSummary[4]} />

        <IncomeSourcesChart data={financialSummary[4]} />

        <BudgetGoals savings={financialSummary[2].amount} />

        <MonthlyTracking data={financialSummary} />
      </div>
    </div>
  );
}
