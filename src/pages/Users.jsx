import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { userList } from '../utils/constants';


const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    // console.log(showActiveUsers)
    
  return (
    <div className="flex flex-col">
      <div className="w-2/6 rounded-full mx-auto flex justify-around bg-slate-200 mt-4">
        <button onClick={()=> setSearchParams({filter: 'active'})} className="bg-[#fffbfb] m-2 p-2 px-4 rounded-full font-bold">
          Active User
        </button>
        <button onClick={()=> setSearchParams({})} className="bg-[#fffbfb] m-2 p-2 px-4 rounded-full font-bold">
          Reset Filter
        </button>
      </div>
      {showActiveUsers && "Showing Active Users"}
      {userList.map((user) => (
        <Link
          key={user.id}
          to={`/users/${user.id}`}
          className="text-xl mx-2 my-4 text-center rounded-md font-bold w-1/12 bg-sky-400"
        >
          User: {user.name}
        </Link>
      ))}
    </div>
  );
}

export default Users