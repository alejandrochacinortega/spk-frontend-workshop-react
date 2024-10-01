import { IUser } from '../../api/types';
import './usersList.css';

interface IUsersListProps {
  users: IUser[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UsersList = ({ users }: IUsersListProps) => {
  const renderAllUsers = () => {
    return <h3>I should return all users :(</h3>;
  };

  return (
    <div>
      <h2>All users</h2>
      {renderAllUsers()}
    </div>
  );
};

export default UsersList;
