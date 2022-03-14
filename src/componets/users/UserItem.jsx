import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './UserItem.css';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="items">
      <div>
        <div>
          <div></div>
          <div className="img">
            <img  src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="name">{login}</h2>
          <Link to={`/user/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
