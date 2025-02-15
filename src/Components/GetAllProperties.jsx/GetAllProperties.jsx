import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../Redux-Arch/Action";

const GetAllProperties = () => {
  const dispatch = useDispatch();
  const { properties, isLoading, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error fetching properties</h2>;

  return (
    <div>
      <h1>Properties List</h1>
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <div key={index}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
          </div>
        ))
      ) : (
        <p>No properties found</p>
      )}
    </div>
  );
};

export default GetAllProperties;
