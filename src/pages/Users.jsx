import React from 'react'
import { Link } from 'react-router-dom'
import { userList } from '../utils/constants';


const Users = () => {
  return (
    <div className='flex flex-col'>
      {userList.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`} className="text-xl mx-2 my-4 text-center rounded-md font-bold w-1/12 bg-sky-400">User: {user.name}</Link>
      ))}
    </div>
  );
}

export default Users