import React from 'react';
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {setCount(count+1)};
    const decrement = () => {setCount(count-1)};
    const setZero = () => {setCount(0)};

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increment} disabled={count===5}>+</button>
          <button className="btn card__btn" onClick={decrement} disabled={count===-5}>-</button>
          <button className="btn card__btn" onClick={setZero}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
