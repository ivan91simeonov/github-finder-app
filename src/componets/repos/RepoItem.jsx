import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count
  } = repo;

  return (
    <div>
      <div>
        <h3>
          <a href={html_url}>
            <FaLink /> {name}
          </a>
        </h3>
        <p>
            {description}
        </p>
        <div>
            <div>
                <FaEye /> {watchers_count}
            </div>
            <div>
                <FaStar /> {stargazers_count}
            </div><div>
                <FaInfo /> {open_issues}
            </div><div>
                <FaUtensils /> {forks}
            </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
