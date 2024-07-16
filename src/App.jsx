// src/App.js
import React from 'react';
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <div style={{backgroundImage:'url(./public/Home/header.png)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='h-full'>
    {/* nav */}
    <div className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-10 container rounded-b-2xl">
        <div className="flex items-center space-x-2">
          <button className='w-full'>
            <img src="../public/logo/BizConnect.png" alt="Logo" className="w-24 sm:w-28 md:w-32"></img>
          </button>
        </div>
        <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800 gap-4">
          <button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Login </button>
          <button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Sign Up </button>
        </nav>
      </div>
      
      {/* banner */}
      <div className="flex flex-col justify-center space-y-8 py-10">
        <h3 className='text-3xl text-center'>Welcome to <span className='text-violet-300 font-bold'>Biz</span><span className='text-pink-200 font-bold'>Connect</span></h3>
        <h1 className='text-5xl text-center bg-gradient-to-tl from-[#e26df0] to-[#fa74ad] inline-block text-transparent bg-clip-text'>Connecting <b>Student</b>, <b>Entrepreneur</b>, <b>Investor</b></h1>
        <h4 className='text-center text-lg'>We believe in connection for your Empowerment</h4>
        {/* <img src="/public/Home/bannar-foot.webp" alt="" className='bottom-0' /> */}
        <div className=" flex flex-col justify-center space-y-5" style={{backgroundImage: `url(/public/Home/bannar-foot.webp)`, backgroundRepeat:`no-repeat`, backgroundSize:`cover`}}>
          <h3 className='text-center text-xl'>So why be late? Connect with the Future Maker for free!</h3>
          <div className=" flex flex-row gap-10 justify-center">
          <button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Login </button>
          <button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Sign Up </button>
          </div>
        </div>
      </div>
    </div>
    </>
  ); 
};

export default App;