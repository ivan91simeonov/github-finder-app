import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something');
    } else {
      //   @todo - search users

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
          <button>Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
