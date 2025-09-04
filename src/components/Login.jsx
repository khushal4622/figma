import React from 'react';
import bgImage from '../assets/background-image.jpg';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center relative" 
         style={{ backgroundImage: `url(${bgImage})` }}>

      {/* Logo */}
      <h1 className="absolute w-[100px] h-[30px] top-[31px] left-[42px] 
                     text-black font-semibold text-[20px]">
        Your Logo
      </h1>

      {/* Login Card */}
      <div className="absolute w-[450px] h-[600px] top-[90px] left-[783px] 
                      bg-[#f5f5f5] opacity-80 rounded-4xl shadow-lg p-10 flex flex-col">

        {/* Heading */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-[21px]">
              Welcome to <span className="text-[#527b03] font-semibold">LOREM</span>
            </p>
            <h2
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '55px',
                lineHeight: '100%',
                letterSpacing: '0',
                color: '#000',
                marginTop: '4px',
                marginBottom: 0
              }}
            >
              Sign in
            </h2>
          </div>

          {/* No Account + Sign up stacked */}
          <div className="flex flex-col text-right">
            <p className="text-sm text-gray-500">No Account?</p>
            <Link to="/signup" className="text-sm text-[#527b03] cursor-pointer font-semibold" style={{ textDecoration: 'none' }}>Sign up</Link>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <button className="h-[55px] flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#E9F1FF] text-[#4285F4] text-sm font-medium">
            <FcGoogle size={20} /> Sign in with Google
          </button>
          <button className="flex items-center justify-center h-[55px] w-[80px] rounded-md bg-white">
            <FaFacebook size={20} className="text-blue-600"/>
          </button>
          <button className="flex items-center justify-center h-[55px] w-[80px] rounded-md bg-white">
            <FaApple size={20}/>
          </button>
        </div>

        {/* Inputs */}
        <div className="mt-8 flex flex-col gap-6">
          <div>
            <label className="text-sm font-semibold">Enter your username or email address</label>
            <input 
              type="email" 
              placeholder="Username or email address"
              className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Enter your Password</label>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-[#4285F4] text-right mt-2 cursor-pointer">Forgot Password</p>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="mt-10 w-full py-3 bg-[#527b03] text-white font-medium rounded-md">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Login;
