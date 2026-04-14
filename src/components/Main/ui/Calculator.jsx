import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [key, setKey] = useState("")
  const inputs = [
    "0",
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="p-2 shadow-md grid grid-cols-4 w-[25%] h-[50%] gap-2">
          {inputs.map((input, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "col-span-4"
                  : index === inputs.length - 3
                    ? "col-span-2 "
                    : "col-span-1 "
              }
            >
              {index === 0 ? (
                <input
                  value={input}
                  onChange={(e)=> setKey(e.target.value)}
                  type="text"
                  className="w-full p-2 inset-shadow-sm rounded text-end hover:inset-shadow-cyan-200 focus:inset-shadow-cyan-200 hover:border-0 focus:border-none"
                />
              ) : (
                <button
                value={key}
                onClick={(e)=> console.log(e.target.value)
                }
                  className="p-4 rounded cursor-pointer 
          transition-all duration-200 ease-in-out 
          hover:-translate-y-1 hover:shadow-lg shadow-md w-full h-full "
                >
                  {input}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
