import { useEffect, useState } from 'react';



  return (
    <div>
      <h2>Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <p>Count: {count}</p>
      <p>Times two: {timesTwo}</p>
    </div>
  );
};
