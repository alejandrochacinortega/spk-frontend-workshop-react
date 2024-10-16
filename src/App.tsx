import React from 'react';
import Welcome from './components/welcome/Welcome';

import TodoList from './components/todoList/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="7 - Add loading state while fetching todos" />
      <TodoList />
    </div>
  );
};

export default App;
