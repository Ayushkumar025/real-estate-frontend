import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Slices/authSlice";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Simulating API call (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (login.email === "test@example.com" && login.password === "password") {
        dispatch(loginSuccess({ email: login.email }));
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg p-4 rounded-lg overflow-hidden h-[600px] w-[900px]">
        <div className="w-1/2 bg-[#D8232A] flex flex-col justify-center items-center p-6">
          <img src="./Images/internship-portal.webp" alt="Internship Portal" className="w-[600px] h-[600px]" />
        </div>

        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center mt-4">Log in</h1>

          <div className="mt-6 space-y-4">
            <button className="w-full py-3 bg-white text-black border border-gray-400 flex items-center gap-3">
              <FcGoogle size={30} />
              <p>Log In with Google</p>
            </button>
            <button className="w-full py-3 bg-white text-black border border-gray-400 flex items-center gap-3">
              <GrLinkedin size={30} />
              <p>Log In with Linkedin</p>
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              placeholder="Email Id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#D8232A] text-white hover:bg-red-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account? <a href="#" className="text-[#D8232A] font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
