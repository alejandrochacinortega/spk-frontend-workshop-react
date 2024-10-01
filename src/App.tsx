import React from 'react';
import Welcome from './components/welcome/Welcome';
import UsersList from './components/users-list/UsersList';
import users from './api/data';

const App: React.FC = () => {
  return (
    <div>
      <Welcome />
      <h2>Demo 3</h2>
      <UsersList users={users} />
    </div>
  );
};

export default App;
