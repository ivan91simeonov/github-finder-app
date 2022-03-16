import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList ({repos}) {
    return <div className='repos'>
        <div className='card-body'>
            <h2 className='repositories'>
             Latest Repositories 
            </h2>
        {repos.map(repo => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
        </div>
    </div>
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList