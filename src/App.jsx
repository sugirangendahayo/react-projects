import { useState } from "react";
import HelloWord from "./components/HelloWord";
import UserClicks from "./components/UserClicks";
import BtnComponent from "./components/BtnComponent";

function App() {
  const buttons = ["button 1", "button 2", "button 3"];
  return (
    <>
      {/* 
      ===== EXERCISE 1 ======
      <div className="p-4">
        <HelloWord />
      </div>
      ======================

      ==== EXERCISE 2 ======
      <UserClicks />
      ======================


      ==== EXERCISE 3 ======
      <div className="flex justify-center items-center gap-4">
        {buttons.map((label, index) => (
          <BtnComponent
            key={index}
            onClick={() => alert(`You clicked ${label}`)}
          >
            {label}
          </BtnComponent>
        ))}
      </div> 
     ====================== 
      */}
    </>
  );
}

export default App;
