import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../componets/layout/Spinner';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

function User() {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="wrapper">
        <div>
          <Link to="/" className="ghost">
            Back To Search
          </Link>
        </div>

        <div className="grid">
          <div className="custom">
            <div className="rounded">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <dir className="span">
            <div>
              <h1>
                {name}
                <div>{type}</div>
                {hireable && <div className="badge">Hireable</div>}
              </h1>
              <p>{bio}</p>
              <div>
                  <a href={html_url} target='_blank' rel='noreferrer'>
                    Visit Github Profile      
                </a>
              </div>
            </div>
          </dir>
        </div>
      </div>
    </>
  );
}

export default User;
