import React from 'react';
import Welcome from './components/welcome/Welcome';

import TodoList from './components/todoList/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="6 - CRUD Todo List with database" />
      <TodoList />
    </div>
  );
};

export default App;
