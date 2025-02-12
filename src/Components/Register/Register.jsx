import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Slices/authSlice";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [register, setRegister] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Simulating API call (Replace with actual API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(loginSuccess({ name: register.name, email: register.email }));
    } catch (err) {
      dispatch(loginFailure("Registration failed. Please try again."));
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

          <div className="mt-6 space-y-4">
            <button className="w-full py-3 bg-white text-black border border-gray-400 flex items-center gap-3">
              <FcGoogle size={30} />
              <p>Sign Up with Google</p>
            </button>
            <button className="w-full py-3 bg-white text-black border border-gray-400 flex items-center gap-3">
              <GrLinkedin size={30} />
              <p>Sign Up with Linkedin</p>
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              value={register.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder="Email Id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#D8232A] text-white hover:bg-red-600"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Register"}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account? <a href="#" className="text-[#D8232A] font-semibold hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
