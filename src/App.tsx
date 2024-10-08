import React from 'react';
import Welcome from './components/welcome/Welcome';

import TodoList from './components/todoList/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="4.6 - Create Todo List" />
      <TodoList />
    </div>
  );
};

export default App;
