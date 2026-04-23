import ButtonGrid from "./components/Main/ui/ButtonGrid";
import Display from "./components/Main/ui/Display";
import TouchTypingApp from "./components/TouchTypingApp";
import TwoStepForm from "./components/TwoStepForm";
import { useCalc } from "./hooks/useCalc";

export default function App() {
  // const {
  //   current,
  //   previous,
  //   operation,
  //   addDigit,
  //   chooseOperation,
  //   calculate,
  //   clear,
  //   percentage,
  //   toggleSign,
  // } = useCalc();
  return (
    <div
    //  className="h-screen flex items-center justify-center"
    >
      {/* <div className="bg-gray-800 rounded-3xl p-5 w-80 shadow-2xl ">
        <Display current={current} previous={previous} operation={operation} />
        <ButtonGrid
          current={current}
          addDigit={addDigit}
          chooseOperation={chooseOperation}
          calculate={calculate}
          clear={clear}
          percentage={percentage}
          toggleSign={toggleSign}
        />
      </div> */}
      {/* <TouchTypingApp /> */}
      <TwoStepForm />
    </div>
  );
}
