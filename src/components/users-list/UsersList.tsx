import { IUser } from '../../api/types';
import './usersList.css';

interface IUsersListProps {
  users: IUser[];
}

const UsersList = ({ users }: IUsersListProps) => {
  const renderAllUsers = () => {
    return (
      <ul className="list">
        {users.map((user: IUser) => {
          return <p>{user.name}</p>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h2>All users</h2>
      {renderAllUsers()}
    </div>
  );
};

export default UsersList;
