import React from "react";

const GreetingForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <input type="text" placeholder="First name" className="border border-gray-300 p-2 rounded"/>
      </div>
      <div>
        <input type="text" placeholder="Last name" className="border border-gray-300 p-2 rounded"/>
      </div>
      <div>
        <button className="bg-red-600 text-white uppercase px-9 py-3 font-semibold rounded cursor-pointer">greet me</button>
      </div>
    </div>
  );
};

export default GreetingForm;
