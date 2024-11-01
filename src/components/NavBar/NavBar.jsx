import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="dashboard">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="back">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex items-center justify-between py-[52px]">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-[28px] font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex gap-4 text-[18px] text-[#131313CC]">{links}</ul>
      </div>
      <div className="">
        <a className="bg-[#23BE0A] px-[28px] py-[18px] rounded-[8px] mr-4 text-[18px] font-semibold text-white">Sign In</a>
        <a className="bg-[#59C6D2] px-[28px] py-[18px] rounded-[8px] text-[18px] font-semibold text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
