import React, { useReducer } from "react";

let initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "join":
      return { count: state.count + 1 };
    case "exit":
      return { count: state.count - 1 };
  }
}
const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleInc() {
    dispatch({ type: "join" });
  }
  function handleDec() {
    dispatch({ type: "exit" });
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default ReducerDemo;
