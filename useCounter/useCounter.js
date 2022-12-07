import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => setCounter(counter + value);

  const decrement = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
