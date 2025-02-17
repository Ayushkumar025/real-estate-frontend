import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [selectedType, setSelectedType] = useState("Commercial");

  return (
    <div className="w-full flex flex-col items-center px-4 py-6 md:py-12 bg-cover bg-center" style={{ backgroundImage: "url('/Images/bg.jpeg')" }}>
      {/* Header Text */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Find Your Best Dream House for <br className="hidden md:block" /> Rental, Buy & Sell…
      </h2>

      {/* Options (Home Interiors & Guarantee) */}
      <div className="flex items-center gap-4 bg-beige-200 px-4 py-2 rounded-lg shadow-md">
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          🏡 Home Interiors
        </span>
        <span className="text-gray-500">||</span>
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          🔑 45-Days Guarantee
        </span>
      </div>

      {/* Search Type Selection */}
      <div className="flex mt-4 gap-2">
        {[
          { label: "Buy", icon: "🏠" },
          { label: "Rent", icon: "🛏️" },
          { label: "Commercial", icon: "🏢" },
        ].map((type) => (
          <button
            key={type.label}
            onClick={() => setSelectedType(type.label)}
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 border transition-all duration-200 ${
              selectedType === type.label
                ? "bg-yellow-500 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {type.icon} {type.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-3/4 mt-4 flex flex-col md:flex-row items-center bg-white p-2 rounded-lg shadow-md">
        <select className="px-4 py-2 border-none outline-none bg-transparent text-gray-700">
          <option>Bengaluru</option>
          <option>Noida</option>
        </select>
        <input
          type="text"
          placeholder="Enter Address"
          className="flex-grow px-4 py-2 outline-none border-none bg-transparent"
        />
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg flex items-center gap-2">
          <FaSearch /> Search
        </button>
      </div>

      {/* Additional Filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Full House", "PG/Hostels", "Flatmates", "1RK", "Immediate"].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1 text-gray-700 border border-gray-300 rounded-lg text-sm"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
