import React from 'react';
import Welcome from './components/welcome/Welcome';

import Counter from './components/counter/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="4.3 - Increment by 5." />
      <Counter />
    </div>
  );
};

export default App;
