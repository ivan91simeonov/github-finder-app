import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');
  const { users,dispatch ,clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({
        type: 'SET_LOADING'
      })

      const users = await searchUsers(text);

      dispatch({type: 'GET_USERS' , payload: users})

      setText('');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button type="submit">Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
