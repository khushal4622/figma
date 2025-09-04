import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import bgImage from '../assets/background-image.jpg';

export default function Signup() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <h1 className="absolute w-[100px] h-[30px] top-[31px] left-[42px] 
                     text-black font-semibold text-[20px]">
        Your Logo
      </h1>

      <div
        style={{
          position: 'absolute',
          top: '90px',
          left: '783px',
          width: '450px',
          height: '600px',
          background: '#f5f5f5',
          opacity: 0.8,
          borderRadius: '32px',
          boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 0 }}>
          <div>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '21px',
              marginBottom: 0,
              marginTop: 0
            }}>
              Welcome to <span style={{ color: "#527b03", fontWeight: 600 }}>LOREM</span>
            </p>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '55px',
              lineHeight: '100%',
              letterSpacing: '0',
              color: '#000',
              marginTop: '4px',
              marginBottom: 0
            }}>Sign up</h2>
          </div>
          <div style={{ textAlign: "right", marginTop: 2 }}>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#888',
              margin: 0
            }}>Have an Account ?</p>
            <Link to="/login" style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#527b03',
              textDecoration: 'none'
            }}>Sign in</Link>
          </div>
        </div>
        <form style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 22 }}>
          <div>
            <label className="text-sm font-semibold">Enter your username or email address</label>
            <input
              type="email"
              placeholder="Username or email address"
              className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label className="text-sm font-semibold">User name</label>
              <input
                type="text"
                placeholder="User name"
                className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="text-sm font-semibold">Contact Number</label>
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">Enter your Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-2 px-4 py-3 border border-[#ADADAD] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="mt-10 w-full py-3 bg-[#527b03] text-white font-medium rounded-md">
          Sign up
        </button>
                  </form>
      </div>
    </div>
  );
}
