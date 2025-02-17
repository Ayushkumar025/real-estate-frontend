import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProperty } from "../Redux-Arch/Action";

const PostSellerProperty = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    seller: "",
    title: "",
    description: "",
    property_type: "Apartment",
    price: "",
    location: "",
    latitude: "",
    longitude: "",
    status: "Available",
    images: [],
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length + formData.images.length > 10) {
      setError("You can upload a maximum of 10 images.");
      return;
    }
    
    setError(""); 
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: [...formData.images, ...fileURLs] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.images.length < 5) {
      setError("Please upload at least 5 images.");
      return;
    }

    setError("");
    dispatch(postProperty(formData));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6 text-maroon-500">Post Your Property</h1>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input type="text" name="seller" placeholder="Seller ID" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600" />

        <input type="text" name="title" placeholder="Title" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600" />

        <textarea name="description" placeholder="Description" onChange={handleChange} 
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600" />

        <select name="property_type" onChange={handleChange} 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600">
          <option>Apartment</option>
          <option>House</option>
          <option>Commercial</option>
          <option>Land</option>
        </select>

        <input type="number" name="price" placeholder="Price" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />

        <input type="text" name="location" placeholder="Location" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />

        <input type="number" step="any" name="latitude" placeholder="Latitude" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />

        <input type="number" step="any" name="longitude" placeholder="Longitude" onChange={handleChange} required 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />

        <select name="status" onChange={handleChange} 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600">
          <option>Available</option>
          <option>Sold</option>
          <option>Rented</option>
          <option>Under Review</option>
        </select>

        <input type="file" multiple accept="image/*" onChange={handleFileChange} 
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />

        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-5 gap-2 mt-4">
          {formData.images.map((img, index) => (
            <img key={index} src={img} alt="Property Preview" className="h-20 w-20 object-cover rounded-md" />
          ))}
        </div>

        <button type="submit" className="w-full p-3 rounded-md bg-maroon-600 hover:bg-maroon-700 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostSellerProperty;
