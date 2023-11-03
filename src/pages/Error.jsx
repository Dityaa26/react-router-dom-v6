import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    console.log(error)
  return (
    <div className="h-screen w-screen flex">
      <div className="mx-auto w-8/12 flex flex-col justify-center items-center">
        <h1 className="text-8xl pb-6 text-[#0d0d0d]">{error.status}</h1>
        <p className="text-3xl font-bold text-[#0d0d0d]">{error.statusText}</p>
        <button
          type="submit"
          className="bg-[#0d0d0d] text-white mx-4 mt-4 p-2 font-semibold text-lg w-2/12"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error