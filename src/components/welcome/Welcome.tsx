import logo from '../../assets/logo.svg';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={logo} className="Welcome-logo" alt="logo" />
        <p>🤓️🤓️🤓️ Velkommen til Frontend del IV 🤓️🤓️🤓️</p>
      </header>
    </div>
  );
};

export default Welcome;
