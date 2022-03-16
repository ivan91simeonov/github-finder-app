import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../componets/layout/Spinner';
import RepoList from '../componets/repos/RepoList';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import { getUser, getUserRepos } from '../context/github/GithubActions';

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    // getUser(params.login);
    // getUserRepos(params.login);
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      const userData = await getUser(params.login);

      dispatch({ type: 'GET_USER', payload: userData });

      const userRepoData = await getUserRepos(params.login);

      dispatch({ type: 'GET_REPOS', payload: userRepoData });
    };

    getUserData();
  }, [dispatch , params.login]);

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
          <div className="span">
            <div>
              <h1>
                {name}
                <div>{type}</div>
                {hireable && <div className="badge">Hireable</div>}
              </h1>
              <p>{bio}</p>
              <div>
                <a href={html_url} target="_blank" rel="noreferrer">
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div>
              {location && (
                <div>
                  <div>Location</div>
                  <div>{location}</div>
                </div>
              )}

              {blog && (
                <div>
                  <div>Website</div>
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              )}

              {twitter_username && (
                <div>
                  <div>Twitter</div>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <FaUsers />
            </div>
            <div>
              Followers
              <div>{followers}</div>
            </div>
          </div>
          <div>
            <div>
              <FaUserFriends />
            </div>
            <div>
              Following
              <div>{following}</div>
            </div>
          </div>

          <div>
            <div>
              <FaCodepen />
            </div>
            <div>
              Public Repos
              <div>{public_repos}</div>
            </div>
          </div>

          <div>
            <div>
              <FaStore />
            </div>
            <div>
              Public Gists
              <div>{public_gists}</div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
