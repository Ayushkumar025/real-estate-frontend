import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PropertyDetails from "./Components/PropertyDetails.jsx/PropertyDetails";
import RealEstateAdminDashboard from "./Components/Admin/Admin";
import VerifiedSellers from "./Components/Admin/Seller";
import GetAllProperties from "./Components/Admin/GetAllProperty";
import AdminUnVerifySeller from "./Components/Admin/GetAllUnverifiedSeller";
import AddProperty from "./Components/Seller/AddProperty";
import ForgotPassword from "./Components/Login/ForgetPassword";
import ResetPassword from "./Components/Login/ResetPassword";


function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/admin" element={<RealEstateAdminDashboard />} />
        <Route path="/UnverifiedSellers" element={<AdminUnVerifySeller />} />
        <Route path="/VerifiedSellers" element={<VerifiedSellers />} />
        <Route path="/GetAllProperties" element={<GetAllProperties />}/>
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;