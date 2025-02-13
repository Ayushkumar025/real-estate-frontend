import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";

const SearchHouse = () => {
  const [location, setLocation] = useState("Ghaziabad");
  const [propertyType, setPropertyType] = useState("Flat +1");
  const [budget, setBudget] = useState("Budget");

  return (
    <div className="flex flex-col items-center w-full p-6">
      <h2 className="text-2xl font-medium text-gray-700">
        Find a home you'll <span className="italic font-bold">love</span>
      </h2>

      <div className="flex space-x-6 mt-4 text-gray-600 text-sm">
        {[
          "Buy",
          "Rent",
          "New Projects",
          "PG",
          "Plot",
          "Commercial",
          "Post Free Property Ad",
        ].map((item, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              item === "Buy"
                ? "font-bold border-b-2 border-red-500"
                : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mt-6 w-full max-w-3xl">
        <div className="flex items-center space-x-2 border-r pr-3">
          <FaMapMarkerAlt className="text-red-500" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none text-gray-700 w-24"
          />
        </div>

        {/* Property Type Dropdown */}
        <div className="flex items-center space-x-2 border-r px-3">
          <FaHome className="text-red-500" />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="outline-none text-gray-700"
          >
            <option>Flat +1</option>
            <option>Villa</option>
            <option>Independent House</option>
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="flex items-center space-x-2 border-r px-3">
          <FaRupeeSign className="text-red-500" />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="outline-none text-gray-700"
          >
            <option>Budget</option>
            <option>₹20L - ₹40L</option>
            <option>₹40L - ₹60L</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-red-500 text-white px-6 py-2 rounded-full ml-3 flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchHouse;
