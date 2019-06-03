import React from "react";
import { useAppState, useDispatch } from "../contexts/CounterContext";

const HomeA: React.FC = () => {
  const state = useAppState();
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "increment" });
  };
  return (
    <>
      <h1>CounterA</h1>
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={increment}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
};

export default HomeA;
