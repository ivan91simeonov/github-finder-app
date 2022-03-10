import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.github.com/users');

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div>
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
