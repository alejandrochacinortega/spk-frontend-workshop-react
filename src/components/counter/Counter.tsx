import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  // Declare a state variable "count" with a typed tuple
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter</h1>
      <p className='counter-value'>{count}</p>
      <button onClick={() => setCount(count -5)}>Decrement by 5</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button disabled={count === 0} className={count === 0 ? `disabled` : ``}  onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count + 5)}>Increment by 5</button>

    </div>
  );
};

export default Counter;
