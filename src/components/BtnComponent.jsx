import React from "react";

const BtnComponent = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick} className="bg-black text-white rounded cursor-pointer px-3 py-2">{children}</button>
    </>
  );
};

export default BtnComponent;
