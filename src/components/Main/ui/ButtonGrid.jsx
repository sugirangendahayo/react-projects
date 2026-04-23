import Button from "./Button";

const BUTTONS = [
  { label: "AC", type: "action" },
  { label: "+/-", type: "action" },
  { label: "%", type: "action" },
  { label: "÷", type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "×", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: "=", type: "equals" },
];

export default function ButtonGrid({
  addDigit,
  chooseOperation,
  calculate,
  clear,
  percentage,
  toggleSign,
  current,
}) {
  const handleClick = (label) => {
    // Handle numbers and decimal
    if (!isNaN(label) || label === ".") {
      addDigit(label);
      return;
    }

    // Handle operators
    if (["+", "-", "×", "÷"].includes(label)) {
      if (!current) return;
      chooseOperation(label);
      return;
    }

    // Handle equals
    if (label === "=") {
      calculate();
      return;
    }

    // Handle AC (clear all)
    if (label === "AC") {
      clear();
      return;
    }

    // Handle percentage
    if (label === "%") {
      percentage();
      return;
    }

    // Handle toggle sign
    if (label === "+/-") {
      toggleSign();
      return;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {BUTTONS.map((btn) => (
        <Button
          key={btn.label}
          label={btn.label}
          type={btn.type}
          onClick={() => handleClick(btn.label)}
        />
      ))}
    </div>
  );
}
