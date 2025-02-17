import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium ">
        <div className="flex items-center justify-center gap-2">
          <img src="/Images/logo.webp" alt="company-logo" className="w-[40px] rounded-full"/>
          <h4 className="hidden sm:flex">LUXORA REALTY</h4>
        </div>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1"
          >
            <p>BUY HOUSES</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <div className="w-5 cursor-pointer">
            <CiSearch size={20} />
          </div>
          <div className="group relative">
            <div className="w-5 cursor-pointer">
              <CiUser size={20} />
            </div>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <div className="w-5 min-w-5">
              <CiShoppingCart size={20} />
            </div>
            <p className="absolute right-[-10px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>

          <span
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
          >
            <CiMenuBurger />
          </span>
        </div>

        {/* Sidebar Menu for Small Screens */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3"
            >
              <span className="h-4 rotate-270">
                <IoIosArrowDropdown />
              </span>
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border border-l-0 border-r-0" to="/">HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border border-t-0 border-l-0 border-r-0" to="/">BUY HOUSES</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border border-t-0 border-l-0 border-r-0" to="/">ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border border-t-0 border-l-0 border-r-0" to="/">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;