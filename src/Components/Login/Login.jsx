import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request:', login);
      let res = await axios.post("http://localhost:8080/user/login", login, { withCredentials: true });
      console.log('Login response:', res);
      if(res){
        navigate("/home")
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-[600px] w-[90%] max-w-[900px]">
        {/* Left Section - Image */}
        <div className="w-1/2 bg-[#D8232A] flex flex-col justify-center items-center p-6">
          <img
            src="./Images/internship-portal.webp"
            alt="Internship Portal"
            className="w-full h-auto max-w-[400px] max-h-[400px] object-contain"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full py-3 bg-white text-black border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <FcGoogle size={24} />
              <p>Log In with Google</p>
            </button>
            <button className="w-full py-3 bg-white text-black border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <GrLinkedin size={24} />
              <p>Log In with LinkedIn</p>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">OR</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              placeholder="Email Id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8232A]"
              required
            />
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8232A]"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#D8232A] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <a href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <span className="mx-2">|</span>
              <a href="/reset-password" className="text-blue-500 hover:underline">
                Reset Password
              </a>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;