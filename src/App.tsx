import React from 'react';
import Welcome from './components/welcome/Welcome';
import { HelloWorld } from './components/hello-world/HelloWorld';

const App: React.FC = () => {
  return (
    <div>
      <Welcome />
      <HelloWorld />
    </div>
  );
};

export default App;
