import React from 'react';
import Welcome from './components/welcome/Welcome';
import users from './api/data';
import UsersList from './components/users-list/UsersList';

const App: React.FC = () => {
  return (
    <div>
      <Welcome />
      <h2>Demo 5 </h2>
      <UsersList users={users} />
    </div>
  );
};

export default App;
