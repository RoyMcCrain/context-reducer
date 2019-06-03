import React from "react";
import { useAppState, useDispatch } from "../contexts/CounterContext";

const Home: React.FC = () => {
  const state = useAppState();
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
};

export default Home;
