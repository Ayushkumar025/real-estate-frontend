import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../Redux-Arch/Action";
import CustomCard from "../CustomCard/CustomCard";

const GetAllProperties = () => {
  const dispatch = useDispatch();
  const { properties, isLoading, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error fetching properties</h2>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Properties List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <CustomCard
              key={index}
              title={property.title}
              image={property.images.length > 0 ? property.images[0] : "https://via.placeholder.com/300"}
              propertyType={property.property_type}
              location={property.location}
              price={property.price}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No properties found</p>
        )}
      </div>
    </div>
  );
};

export default GetAllProperties;
