import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="bg-[#D8232A] text-white h-12 flex items-center justify-between px-4 relative">
          <ul className="flex w-full">
            <li>REAL-ESTATE</li>
          </ul>
          <details className="relative">
            <summary className="btn m-1 cursor-pointer">Login</summary>
            <ul className="absolute   top-full mt-0 w-52 left-[-40px] bg-white text-black rounded shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Logout
              </li>
            </ul>
          </details>
        </div>
        <div className="text-black h-10 flex items-center">
          <ul className="flex justify-evenly w-full px-4">
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Home Interiors</li>
            <li>Advice</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;
