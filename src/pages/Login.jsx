// pages/Login.js
import React, { useState } from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../context/authContext';

import logo from '../../public/logo/BizConnect.png'; // Replace with your actual logo file path

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('entrepreneur'); // Default role

  //   const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to authenticate user
    //...
    // const user = { id: 1, role: 'investor' }; // Replace with API response
    // login(user, user.role);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <img src={logo} alt="Website Logo" className="h-16 mb-4 mx-auto" /> {/* Logo */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            {/* Username */}
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
                className="bg-transparent focus:outline-none ml-2 text-white"
              />
            </div>
            {/* Password */}
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="bg-transparent focus:outline-none ml-2 text-white"
              />
            </div>
          </div>
          {/* Role Selection */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <label className="text-white">
              <input
                type="radio"
                value="entrepreneur"
                checked={role === 'entrepreneur'}
                onChange={() => setRole('entrepreneur')}
                className="mr-1"
              />
              Entrepreneur
            </label>
            <label className="text-white">
              <input
                type="radio"
                value="investor"
                checked={role === 'investor'}
                onChange={() => setRole('investor')}
                className="mr-1"
              />
              Investor
            </label>
            <label className="text-white">
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
                className="mr-1"
              />
              Student
            </label>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md mt-4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
