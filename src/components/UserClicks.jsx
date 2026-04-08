import React from "react";

const UserClicks = ({ exerciseLinks }) => {
  function handleClick() {
        alert("Clicked!");
    }
  return (
    <div className="flex-col ">
      <ul className="flex justify-center items-center gap-4 py-6">
        {exerciseLinks.map((link) => (
          <li>
            <a href="#" key={link} className="underline text-violet-600">
              {link} |
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-[10%]">
        <button
          className="bg-black text-white rounded cursor-pointer px-3 py-2"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default UserClicks;
