export default function Display({ current, previous, operation }) {
  const expression = previous ? `${previous} ${operation}` : "";
  const result = current || "0";

  return (
    <div className="bg-gray-900 rounded-2xl p-5 mb-4 min-h-[100px] flex flex-col justify-end">
      <p className="text-gray-400 text-right text-sm min-h-[20px] truncate">
        {expression}
      </p>

      <p className="text-white text-right text-4xl font-light mt-1 truncate">
        {result}
      </p>
    </div>
  );
}
