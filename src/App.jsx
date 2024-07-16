
// src/App.js
import React from 'react';
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>

    //<div style={{backgroundImage:'url(./public/Home/header.png)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='h-full'>
    //{/* nav */}
    //<div className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-10 container rounded-b-2xl">
        //<div className="flex items-center space-x-2">
         // <button className='w-full'>
           // <img src="../public/logo/BizConnect.png" alt="Logo" className="w-24 sm:w-28 md:w-32"></img>
          //</button>
       // </div>
        //<nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
          //<button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Login -<span className='text-gray-300'>It's Free</span> </button>
        //</nav>
     // </div>
      
      //{/* banner */}
    //  <div className=""></div>
    //</div> 

      <div className="navbar bg-gradient-to-l from-[#ad5389] to-[#3c1053] w-full h-16 sticky top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold text-black mb-4">
            <img
              width="200px"
              src="../../public/logo/BizConnect.png"
              alt="BizConnect Logo"
            />
          </a>
        </div>
        <div className="pr-12 md:pr-24">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-4"
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <Link to="/login">
                  <button className="relative inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                      Login
                    </span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="relative inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                      Register
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Content */}
      <div className="bg-[url('homebg.jpg')] min-h-[calc(100vh-4rem)] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-extrabold text-gray-800"
            >
              Welcome to BizConnect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4 text-2xl text-gray-600"
            >
              Connecting students, entrepreneurs, and investors for a brighter
              future.
            </motion.p>
          </div>

          <div className="w-full flex justify-center mb-20">
            <Link to="/signup"
              className="relative inline-flex items-center justify-center p-10 px-16 py-4 overflow-hidden font-medium text-gradient-to-r from-purple-500 to-pink-500 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-lg">
              Get Started
              </span>
              <span className="relative invisible">Get Started</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-xl text-white"
            >
              <div className="text-center">
                <FaBriefcase className="text-5xl mb-6" />
                <h2 className="text-3xl font-semibold mb-4">For Students</h2>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Find job opportunities
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Improve your skills
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Career guidance through AI
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-xl text-white"
            >
              <div className="text-center">
                <FaUsers className="text-5xl mb-6" />
                <h2 className="text-3xl font-semibold mb-4">
                 For Entrepreneurs
                </h2>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Secure funding
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Find business partners
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Receive mentorship
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-xl text-white"
            >
              <div className="text-center">
                <FaHandshake className="text-5xl mb-6" />
                <h2 className="text-3xl font-semibold mb-4">For Investors</h2>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Invest in startups
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Mentor entrepreneurs
                </p>
                <p className="text-lg font-light mb-2 flex justify-center items-center gap-2">
                <FaArrowRight className="text-sm"/>Network with industry experts
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </>
  ); 
};

export default App;
