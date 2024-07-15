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
        <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
          <button className="rounded-xl bg-[#0000003b] px-5 py-2 border border-gray-300 text-white transition hover:bg-violet-900"> Login -<span className='text-gray-300'>It's Free</span> </button>
        </nav>
      </div>
      
      {/* banner */}
      <div className=""></div>
    </div>
    </>
  ); 
};

export default App;