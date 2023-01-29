import { useState } from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div >
      <h1>{count}</h1>
      <button onClick={increment} className={classes.button}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
