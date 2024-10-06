import logo from '../../assets/logo.svg';
import './Welcome.css';

interface IWelcomeProps {
  demo: string;
}

const Welcome = ({ demo }: IWelcomeProps) => {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={logo} className="Welcome-logo" alt="logo" />
        <h1>🤓️🤓️🤓️ Velkommen til Frontend del V 🤓️🤓️🤓️</h1>
        <h2>{demo}</h2>
      </header>
    </div>
  );
};

export default Welcome;
