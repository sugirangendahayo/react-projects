import React from "react";

const GreetingForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  function greetUser() {
    alert(`Hello ${firstName} ${lastName}`);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <input
          type="text"
          placeholder="First name"
          className="border border-gray-300 p-2 rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last name"
          className="border border-gray-300 p-2 rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-red-600 text-white uppercase px-9 py-3 font-semibold rounded cursor-pointer"
          onClick={greetUser}
        >
          greet me
        </button>
      </div>
    </div>
  );
};

export default GreetingForm;
