import { Link } from 'react-router-dom';
import './Header.css'; // Optional: for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="title">Frontend Workshop Del VII</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
