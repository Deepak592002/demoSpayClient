// UserList.js

import React, { useState } from 'react';

const UserList = () => {
  const[UserData,setUserData]=useState([])
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
    // Add more user data as needed
  ];
  function fetchData(){
  
    setUserData(users.map((user) => (
      <li key={user.id} className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </li>
    )))
  }
  return (
    <div className="container mx-auto mt-8 bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <button type="button" onClick={fetchData}>Fetch</button>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {UserData}
      </ul>
    </div>
  );
};

export default UserList;
