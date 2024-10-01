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
      <UsersList
        users={users}
        eyeColor="brown"
        title="People with brown eyes"
      />
      <UsersList users={users} minAge={39} title="People olden than 39" />
      <UsersList
        users={users}
        favoriteFruit="apple"
        title="People who have apple as their favorite fruit"
      />
      <UsersList
        users={users}
        favoriteFruit="apple"
        minAge={30}
        title="People who have apple as their favorite fruit and are older than 30"
      />
      <UsersList
        users={users}
        favoriteFruit="strawberry"
        minAge={20}
        maxAge={29}
        title="People who have strawberry as their favorite fruit, are older than 20 and younger than 29"
      />
    </div>
  );
};

export default App;
