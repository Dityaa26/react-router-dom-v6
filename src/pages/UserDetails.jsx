import React from 'react'
import { useParams } from 'react-router-dom'
import { userList } from '../utils/constants'

const UserDetails = () => {
    const {userId} = useParams()
    // console.log(typeof userId)

    const user = userList.filter(u => u.id == userId);
    // console.log(user)

  return (
    <div className='text-4xl font-bold'>
      UserId: {userId}, UserName: {user[0].name}
    </div>
  );
}

export default UserDetails