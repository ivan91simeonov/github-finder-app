import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar({ title }) {
  return (
    <nav className="navbar">
        <div className='icons-link'>
          <FaGithub />
          <Link className='link' to="/">{title}</Link>
        </div>

        <div>
          <div className="main-nav">
            <Link className='nav-menu' to="/">Home</Link>
            <Link className='nav-menu' to="/about">About</Link>
          </div>
        </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.prototype = {
  title: PropTypes.string,
};

export default Navbar;
