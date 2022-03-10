import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div>
      <div>
        <div>
          <div></div>
          <div>
            <img width={180} src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2>{login}</h2>
          <Link to={`/user/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
