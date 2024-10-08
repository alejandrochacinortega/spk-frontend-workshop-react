import React from 'react';
import Welcome from './components/welcome/Welcome';

import Counter from './components/counter/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="4.2 - Simple Counter with Reset" />
      <Counter />
    </div>
  );
};

export default App;
