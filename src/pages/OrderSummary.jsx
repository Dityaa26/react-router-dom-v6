import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col pt-36 justify-center items-center">
      <h1 className="text-4xl text-green-600 font-bold">Order Confirm!</h1>
      <button
        type="submit"
        className="bg-sky-400 mx-4 mt-4 p-2 font-semibold text-lg w-1/12"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default OrderSummary