import { useState } from 'react';
import { IUser } from '../../api/types';
import './usersList.css';

interface IUsersListProps {
  users: IUser[];
}

const UsersList = ({ users }: IUsersListProps) => {
  const [searchValue, setSearchValue] = useState('');
  const renderAllUsers = () => {
    const totalUsers = users.filter((user: IUser) =>
      user.name.includes(searchValue),
    );
    return (
      <div className="container">
        <h3>Total match: {totalUsers.length}</h3>
        <ul className="list">
          {totalUsers.map((user: IUser) => {
            return <p>{user.name}</p>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h2>All users</h2>
      <input
        placeholder="Search"
        type="text"
        name="Search value"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="input"
      />
      {renderAllUsers()}
    </div>
  );
};

export default UsersList;
