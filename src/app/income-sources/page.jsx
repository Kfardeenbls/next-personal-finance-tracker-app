// IncomeSource Component
export default function IncomeSource() {
  const data = {
    category: "Income Sources",
    summary: "Breakdown of income sources",
    sources: [
      { source: "Primary Job (Salary)", percentage: 67 },
      { source: "Side Hustles (Freelancing)", percentage: 20 },
      { source: "Passive Income (Investments)", percentage: 13 },
    ],
  };
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{data.category}</h2>
      <p className="text-gray-500">{data.summary}</p>

      {/* List of Income Sources */}
      <ul className="mt-4">
        {data.sources.map((source, index) => (
          <li key={index} className="flex justify-between">
            <span>{source.source}</span>
            <span>{source.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
