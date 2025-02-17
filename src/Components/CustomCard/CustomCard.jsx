import React from "react";

const CustomCard = ({ title, description, price,images }) => {
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-green-500 font-semibold">Price: ${price}</p>
      <img src={images}/>
    </div>
  );
};

export default CustomCard;
