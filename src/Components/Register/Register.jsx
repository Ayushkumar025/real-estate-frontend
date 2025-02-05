import React, { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const[login,setLogin]=useState({
        email:"",
        password:"",
        names:""
      })
    
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setLogin({...login,[name]:value})
      }
    
      const handleSubmit=(e)=>{
        e.preventDefault()
      }

  return (
    <>
      <div className="flex justify-center items-center  h-screen bg-gray-100">
        <div className="flex bg-white rounded-bl-[70px] shadow-lg p-4 rounded-lg overflow-hidden h-[600px] w-[900px]">
          <div className="w-1/2 bg-[#D8232A] rounded-bl-[70px] rounded-tr-[70px] rounded-lg flex flex-col justify-center items-center p-6">
            <img
              src="./Images/internship-portal.webp"
              alt="Internship Portal"
              className="object-contain w-[600px] h-[600px]"
            />
          </div>

          <div className="w-1/2 p-8">
            <div className="flex gap-10">
              <div>
                <h1 className="text-2xl font-bold text-center mt-4">Sign-up</h1>
              </div>
              {/* <div className="flex bg-[#DEEDFC] p-2 rounded-full justify-center items-center">
                      <button className="text-sm font-semibold bg-[#002C58] text-white px-4 py-2 rounded-full focus:outline-none">
                        As Candidate
                      </button>
                      <button className="ml-2 text-sm text-gray-500 px-4 py-2 rounded-full hover:text-gray-700 focus:outline-none">
                        As Recruiter
                      </button>
                    </div> */}
            </div>

            <div className="mt-6 space-y-4">
              <button className="justify-center w-full py-3 bg-white text-black rounded-lg border border-gray-400 flex items-center gap-3">
                <FcGoogle size={30} />
                <p>Log In with Google</p>
              </button>
              <button className="justify-center w-full py-3 bg-white text-black rounded-lg border border-gray-400 flex items-center gap-3">
                <GrLinkedin size={30} />
                <p>Log In with Linkedin</p>
              </button>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-sm text-gray-500">
                  or login with email
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="names"
                  value={login.names}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                />
                <input
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                />
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                />
                <button
                  type="submit"
                  className="w-full py-3 border rounded-full bg-[#D8232A] text-white hover:bg-red-600"
                >
                  Register
                </button>
              </form>

              {/* <div className="flex justify-between mt-2 text-sm text-blue-500">
                <a href="#" className="hover:underline">
                  Login via OTP
                </a>
                <a href="#" className="hover:underline">
                  Forgot password?
                </a>
              </div> */}
            </div>

            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a
                href=""
                className="text-[#D8232A] font-semibold hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
