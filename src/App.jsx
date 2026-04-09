// import { useState } from "react";
// import HelloWord from "./components/HelloWord";
// import UserClicks from "./components/UserClicks";
// import BtnComponent from "./components/BtnComponent";
// import AnimalList from "./components/AnimalList";
// import GreetingForm from "./components/GreetingForm";
// import { useEffect } from "react";
// import Jokes from "./components/Jokes";
// import WorkingAPI from "./components/WorkingAPI";

// function App() {
//   // const buttons = ["button 1", "button 2", "button 3"];
//   // const animals = [
//   //   "🐕 dog",
//   //   "🐈 cat",
//   //   "🐤 chicken",
//   //   "🐄 cow",
//   //   "🐏 sheep",
//   //   "🐎 horse",
//   // ];
//   // const exerciseLinks = [
//   //   "Home",
//   //   "Exercise 1",
//   //   "Exercise 2",
//   //   "Exercise 3",
//   //   "Exercise 4",
//   //   "Exercise 5",
//   //   "Exercise 6",
//   //   "Exercise 7",
//   //   "Exercise 8",
//   //   "Exercise 9",
//   // ];
//   // const [jokes, setJokes] = useState([]);

//   // useEffect(() => {
//   //   async function fetchJokes() {
//   //     const response = await fetch("./data/jokes.json");
//   //     const data = await response.json();
//   //     setJokes(data);
//   //   }
//   //   fetchJokes();
//   // }, []);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       const respone = await fetch("https://randomuser.me/api/0.8/?results=10");
//       const data = await respone.json();
//       setUsers(data.results);
//       console.log(data.results);
//     }
    
//     fetchUsers();
//   }, []);
//   return (
//     <>
//       {/* 
//       ===== EXERCISE 1 ======
//       <div className="p-4">
//         <HelloWord />
//       </div>
//       ======================

//       ==== EXERCISE 2 ======
//       <UserClicks exerciseLinks={exerciseLinks} />
//       ======================


//       ==== EXERCISE 3 ======
//       <div className="flex justify-center items-center gap-4">
//         {buttons.map((label, index) => (
//           <BtnComponent
//             key={index}
//             onClick={() => alert(`You clicked ${label}`)}
//           >
//             {label}
//           </BtnComponent>
//         ))}
//       </div> 
//      ====================== 

     
//      ==== EXERCISE 4 ===== 
//     <div className="flex justify-center items-center h-screen">

//     <AnimalList animals={animals} />
//     </div>
//       =======================
//      */}
//       {/* <div className="flex justify-center items-center h-screen"> */}
//         {/* <GreetingForm /> */}
//         {/* <Jokes jokes={jokes} /> */}
//       {/* </div> */}

//       <WorkingAPI users={users}/>
//     </>
//   );
// }

// export default App;
import { useState, useEffect } from "react"; // Added useEffect import
import WorkingAPI from "./components/WorkingAPI";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://randomuser.me/api/0.8/?results=10");
      const data = await response.json();
      setUsers(data.results);
    }
    fetchUsers();
  }, []);

  return (
    // Grid layout to display multiple cards nicely
    <div className="min-h-screen bg-yellow-100 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {users.map((item, index) => (
        // Pass the individual user object as a prop
        <WorkingAPI key={index} userData={item.user} />
      ))}
    </div>
  );
}

export default App;
