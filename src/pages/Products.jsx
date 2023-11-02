import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="search"
        placeholder="Search"
        className="bg-slate-200 mx-auto w-3/12 rounded text-orange-500 outline-none border-b-2 border-slate-600 my-4 p-2"
      />
      <nav className="w-3/12 flex justify-around p-2 text-lg font-semibold">
        <NavLink to='featured' className={({ isActive }) => `w-4/12 text-center border p-1 py-2 rounded-full ${isActive ? 'drop-shadow-md bg-sky-300': 'bg-white'}`}>Featured</NavLink>
        <NavLink to='new' className={({ isActive }) => `w-4/12 text-center border p-1 py-2 rounded-full ${isActive ? 'drop-shadow-md bg-sky-300': 'bg-white'}`}>New</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products