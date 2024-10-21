import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="title">Frontend Workshop Del VII</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* // TODO: Link to todos page  */}
          {/* // TODO: Link to profile page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
