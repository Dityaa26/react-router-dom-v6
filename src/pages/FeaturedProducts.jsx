import React from 'react'
import Card from '../components/Card'

const FeaturedProducts = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl text-center'>Featured Products</h1>
      <div className="w-full mx-auto bg-slate-200 m-2 grid grid-cols-6 px-auto p-2 rounded-md">
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
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default FeaturedProducts