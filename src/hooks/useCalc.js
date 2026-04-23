import { useReducer } from "react";

const initialState = {
  current: "",
  previous: "",
  operation: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_DIGIT":
      return { ...state, current: state.current + action.payload };
    case "CHOOSE_OPERATION":
      return {
        previous: state.current,
        current: "",
        operation: action.payload,
      };
    case "CALCULATE": {
      const prev = parseFloat(state.previous);
      const curr = parseFloat(state.current);
      if (isNaN(prev) || isNaN(curr)) return state;
      let result;

      if (state.operation === "+") result = prev + curr;
      if (state.operation === "-") result = prev - curr;
      if (state.operation === "*") result = prev * curr;
      if (state.operation === "/") result = prev / curr;

      return {
        current: result.T,
        previous: "",
        operation: null,
      };
    }
    case "CLEAR":
      return initialState;
    case "PERCENTAGE": {
      const curr = parseFloat(state.current);
      if (isNaN(curr)) return state;
      return { ...state, current: (curr / 100).toString() };
    }
    case "TOGGLE_SIGN": {
      const curr = parseFloat(state.current);
      if (isNaN(curr)) return state;
      return { ...state, current: (curr * -1).toString() };
    }

    default:
      return state;
  }
}

export function useCalc() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,
    addDigit: (digit) => dispatch({ type: "ADD_DIGIT", payload: digit }),
    chooseOperation: (operation) =>
      dispatch({ type: "CHOOSE_OPERATION", payload: operation }),
    calculate: () => dispatch({ type: "CALCULATE" }),
    clear: () => dispatch({ type: "CLEAR" }),
    percentage: () => dispatch({ type: "PERCENTAGE" }),
    toggleSign: () => dispatch({ type: "TOGGLE_SIGN" }),
  };
}
