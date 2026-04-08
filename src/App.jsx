import { useState } from "react";
import HelloWord from "./components/HelloWord";
import UserClicks from "./components/UserClicks";
import BtnComponent from "./components/BtnComponent";
import AnimalList from "./components/AnimalList";
import GreetingForm from "./components/GreetingForm";
import { useEffect } from "react";
import Jokes from "./components/Jokes";

function App() {
  // const buttons = ["button 1", "button 2", "button 3"];
  // const animals = [
  //   "🐕 dog",
  //   "🐈 cat",
  //   "🐤 chicken",
  //   "🐄 cow",
  //   "🐏 sheep",
  //   "🐎 horse",
  // ];
  // const exerciseLinks = [
  //   "Home",
  //   "Exercise 1",
  //   "Exercise 2",
  //   "Exercise 3",
  //   "Exercise 4",
  //   "Exercise 5",
  //   "Exercise 6",
  //   "Exercise 7",
  //   "Exercise 8",
  //   "Exercise 9",
  // ];
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchJokes() {
      const response = await fetch("./data/jokes.json");
      const data = await response.json();
      setJokes(data);
    }
    fetchJokes();
  }, []);
  return (
    <>
      {/* 
      ===== EXERCISE 1 ======
      <div className="p-4">
        <HelloWord />
      </div>
      ======================

      ==== EXERCISE 2 ======
      <UserClicks exerciseLinks={exerciseLinks} />
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

     
     ==== EXERCISE 4 ===== 
    <div className="flex justify-center items-center h-screen">

    <AnimalList animals={animals} />
    </div>
      =======================
     */}
      <div className="flex justify-center items-center h-screen">
        {/* <GreetingForm /> */}
        <Jokes jokes={jokes} />
      </div>
    </>
  );
}

export default App;
