import PropTypes from 'prop-types'

function RepoList ({repos}) {
    return <div className='repos'>
        <div className='card-body'>
            <h2 className='repositories'>
             Latest Repositories 
            </h2>
        {repos.map(repo => (
            <h3>{repo.name}</h3>
        ))}
        </div>
    </div>
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList