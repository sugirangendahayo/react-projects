import { useState } from "react";
import HelloWord from "./components/HelloWord";
import UserClicks from "./components/UserClicks";
import BtnComponent from "./components/BtnComponent";

function App() {
  const buttons = ["button 1", "button 2", "button 3"];
  return (
    <>
      {/* Exercise 1 Start*/}
      {/* <div className="p-4">
        <HelloWord />
      </div> */}
      {/* Exercise 1 End */}
      {/* Exercise 2 Start*/}
      <UserClicks />
      {/* Exercise 2 End */}
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
    </>
  );
}

export default App;
