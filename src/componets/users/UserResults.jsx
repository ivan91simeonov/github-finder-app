import { useEffect, useState } from 'react';

function UserResults() {

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users` , {
            headers:{
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        console.log(data)
    }
  return (
      <div>
          
      </div>
  )
}

export default UserResults;
