import React from "react";

const Jokes = ({ jokes }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 bg-slate-100 p-4">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="border border-gray-300 p-4 rounded cursor-pointer 
          transition-all duration-200 ease-in-out 
          hover:-translate-y-1 hover:shadow-lg bg-green-200"
          >
            <h2 className="text-xl font-semibold">{joke.setup}</h2>
            <p className="text-gray-600">{joke.punchline}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jokes;
