import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaHome } from "react-icons/fa";

const PropertyPost = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from backend (Replace with real API endpoint)
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Properties</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="border rounded-lg shadow-md p-4">
            <img
              src={property.images[0] || "https://via.placeholder.com/300"}
              alt={property.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-gray-600 text-sm">{property.description}</p>
            <div className="flex items-center mt-2 text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              {property.location}
            </div>
            <div className="flex items-center mt-2 text-gray-700">
              <FaHome className="mr-2 text-blue-500" />
              {property.property_type}
            </div>
            <div className="flex items-center mt-2 text-gray-700 font-semibold">
              <FaRupeeSign className="mr-2 text-green-500" />
              {property.price.toLocaleString()}
            </div>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPost;
