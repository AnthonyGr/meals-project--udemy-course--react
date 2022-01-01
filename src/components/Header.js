import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="teal">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Meals Project
        </Link>
      </div>
    </nav>
  );
}

export default Header;
