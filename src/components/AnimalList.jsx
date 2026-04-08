import React from "react";

const AnimalList = ({ animals }) => {
  return (
    <div>
      {animals.map((animal) => (
        <p key={animal} className="p-3 border border-gray-500 ">{animal}</p>
      ))}
    </div>
  );
};

export default AnimalList;
