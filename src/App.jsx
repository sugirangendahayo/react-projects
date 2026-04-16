// import { useCalculator } from "./hooks/useCalculator";
// import ButtonGrid from "./components/Main/ui/ButtonGrid";
// import Display from "./components/Main/ui/Display";

import Cart from "./components/Cart";

export default function App() {
  // const { result, expression, handlePress } = useCalculator();
  return (
    /*  <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-3xl p-5 w-80 shadow-2xl ">
        <Display result={result} expression={expression} />
        <ButtonGrid onPress={handlePress} />
      </div>
    </div> */
    <>
      <Cart />
    </>
  );
}
