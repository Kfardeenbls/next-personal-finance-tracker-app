import Image from "next/image";

// SpendingOverview Component
export default function SpendingOverview() {
  const data = {
    category: "Spending Habits",
    summary: "Breakdown of where the money is spent",
    habits: [
      { habit: "Essentials (Rent, Groceries, Utilities)", percentage: 60 },
      { habit: "Leisure (Entertainment, Dining Out)", percentage: 27 },
      { habit: "Savings & Investments", percentage: 13 },
    ],
  };
  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex-1">
      <h2 className="text-xl font-semibold">{data.category}</h2>
      <p className="text-gray-500">{data.summary}</p>

      <ul className="mt-4">
        {data.habits.map((habit, index) => (
          <li key={index} className="flex justify-between">
            <span>{habit.habit}</span>
            <span>{habit.percentage}%</span>
          </li>
        ))}
      </ul>
      <div className="relative" style={{ height: "300px" }}>
        <Image
          src="/expense.png"
          alt="income"
          fill
          style={{
            objectFit: "scale-down",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}
