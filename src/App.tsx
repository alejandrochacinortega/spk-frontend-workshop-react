import React from 'react';
import Welcome from './components/welcome/Welcome';

import TodoList from './components/todoList/TodoList';
import Profile from './components/profile/Profile';

const App: React.FC = () => {
  return (
    <div>
      <Welcome demo="8 - Fetch Profile and Todos" />
      <Profile />
      <TodoList />
    </div>
  );
};

export default App;
