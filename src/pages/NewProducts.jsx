import React from 'react'
import Card from '../components/Card';

const NewProducts = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">New Products</h1>
      <div className="w-[90%] mx-auto bg-slate-300 m-2 flex flex-wrap py-4 px-auto justify-center rounded-md">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default NewProducts