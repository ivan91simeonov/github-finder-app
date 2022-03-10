import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = 'https://api.github.com/users';

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(GITHUB_URL);

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchData
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext
