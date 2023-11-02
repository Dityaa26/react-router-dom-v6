import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { appRouter } from '../main';

const Header = () => {
  return (
    <nav className="bg-purple-500 text-white flex items-center justify-between px-6 py-4">
      <div className="text-4xl font-bold">Logo</div>
      <ul className="p-4 text-xl font-semibold flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "underline underline-offset-[6px]" : ""} px-2`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "underline underline-offset-[6px]" : ""} px-2`
          }
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header