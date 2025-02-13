import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  registerUser } from "../Redux-Arch/Action";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";


const Register = () => {
  

  const navigate=useNavigate()

  const store=useSelector((store)=>store)
  
  const dispatch=useDispatch()
  const [register, setRegister] = useState({ name: "", email: "", password: "", role: "buyer" });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res=dispatch(registerUser(register))
    console.log(res);
    if(res){
      navigate("/login")
    }
    
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg p-4 rounded-lg overflow-hidden h-[600px] w-[900px]">
        <div className="w-1/2 bg-[#D8232A] flex flex-col justify-center items-center p-6">
          <img src="./Images/internship-portal.webp" alt="Internship Portal" className="w-[600px] h-[600px]" />
        </div>

        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center mt-4">Sign-up</h1>
          <p className="text-red-500 text-sm text-center"></p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input type="text" name="name" value={register.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="email" name="email" value={register.email} onChange={handleChange} placeholder="Email Id" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="password" name="password" value={register.password} onChange={handleChange} placeholder="Enter Your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            <select name="role" value={register.role} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <button type="submit" className="w-full py-3 bg-[#D8232A] text-white hover:bg-red-600" >sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;