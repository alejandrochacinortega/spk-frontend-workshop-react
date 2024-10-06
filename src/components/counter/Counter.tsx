import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  // Declare a state variable "count" with a typed tuple
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
