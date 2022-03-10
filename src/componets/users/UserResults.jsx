import { useEffect, useState } from 'react';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    setUsers(data);
    setLoading(false);
  };

  if(!loading) {
      return (
      <div>
         {users.map(user=> (
             <h3>{user.login}</h3>
         ))}
      </div>
      );

  }else{
    return <h3>Loading</h3>
  }

}

export default UserResults;