import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="h-screen w-screen flex">
      <div className='mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-8xl pb-6'>{error.status}</h1>
        <p className='text-3xl font-bold'>{error.statusText}</p>
      </div>
    </div>
  );
}

export default Error