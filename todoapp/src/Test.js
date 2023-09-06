import React, { useState, useEffect } from 'react';

function Todo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        setData(userData);
        
      }
      fetchData();
    }
  }, [data]);

  return (
    <div>
      {data !== null ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>load</p>
      )}
    </div>
  );
}

export default Todo;