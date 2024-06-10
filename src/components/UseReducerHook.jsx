import React, { useReducer } from "react";

export default function UseReducerHook() {
  const countReducer = (state, action) => {
    // state e current value ape etle apre state.count lakhyu che
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  //dispatch -> method                  function
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <h1>This is useReducerHook</h1>
      {/* useReducer is also use for the state managment of the varible when we have a complex logic then we use the useReducerHook */}
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
