import { EyeColor, FavoriteFruit, Gender, IUser } from '../../api/types';
import './usersList.css';

interface IUsersListProps {
  eyeColor?: EyeColor;
  favoriteFruit?: FavoriteFruit;
  gender?: Gender;
  minAge?: number;
  maxAge?: number;
  title?: string;
  users: IUser[];
}

const UsersList = ({
  eyeColor,
  favoriteFruit,
  gender,
  minAge,
  maxAge,
  title = 'List of people',
  users,
}: IUsersListProps) => {
  const renderUsers = () => {
    let result = users;
    if (eyeColor) {
      result = result.filter((user) => user.eyeColor === eyeColor);
    }

    if (gender) {
      result = result.filter((user) => user.gender === gender);
    }

    if (favoriteFruit) {
      result = result.filter((user) => user.favoriteFruit === favoriteFruit);
    }

    if (minAge) {
      result = result.filter((user) => user.age >= minAge);
    }

    if (maxAge) {
      result = result.filter((user) => user.age <= maxAge);
    }

    return (
      <ul className="list">
        {result.map((user: IUser) => {
          return <p key={user._id}>{user.name}</p>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      {renderUsers()}
    </div>
  );
};

export default UsersList;
