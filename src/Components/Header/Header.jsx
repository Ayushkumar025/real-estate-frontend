import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-red-600 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Location */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">magicbricks</h1>
          <div className="flex items-center cursor-pointer">
            <span>Ghaziabad</span>
            <FaChevronDown className="ml-1 text-sm" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          {['Buy', 'Rent', 'Sell', 'Home Loans', 'Home Interiors', 'MB Advice', 'Help', 'MB Prime', 'Login'].map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer">
              <span>{item}</span>
              <FaChevronDown className="ml-1 text-xs text-gray-200" />
            </div>
          ))}
        </nav>

        {/* Post Property Button */}
        <button className="bg-white text-red-600 px-4 py-1 rounded-full flex items-center font-semibold">
          Post Property
          <span className="bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full ml-2">FREE</span>
        </button>
      </div>
    </header>
    </>
  );
};

export default Header;
