import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "../Redux-Arch/Action";
import Navbar from "../Header/Header";
import SearchComponent from "../SeachHouse/SearchHouse";
import Footer from "../Footer/Footer";

const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.selectedProperty);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getPropertyById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!property) {
    return <div className="flex justify-center items-center min-h-screen">Property not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{property.title}</h1>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-yellow-600">
              ₹{property.price.toLocaleString()}
            </p>
            <p className="text-gray-600">{property.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Property Type</p>
                <p className="text-gray-600">{property.property_type}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p className="text-gray-600">{property.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium">{property.location}</p>
            <div className="mt-4 h-64 bg-gray-200 rounded-lg">
              {/* Add your map component here */}
              <p className="text-center pt-8">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PropertyDetails;