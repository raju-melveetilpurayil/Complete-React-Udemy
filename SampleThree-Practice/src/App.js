import React from 'react';
import User from './components/User';
import { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const DUMMY_DATA = [
    { id: 1, name: 'Ashin', age: 18 },
    { id: 2, name: 'Manu', age: 21 },
    { id: 3, name: 'Sen', age: 13 },
    { id: 4, name: 'Unni', age: 8 },
  ];
  const [users, setUsers] = useState(DUMMY_DATA);

  const onSubmitUserHandler = user => {
    user.id = Math.floor(Math.random() * 10000) + 1;

    setUsers(previousUsers => {
      return [...previousUsers,user];
    });
  }
  return (
    <div>
      <User onAddUserHandler={onSubmitUserHandler} />
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
