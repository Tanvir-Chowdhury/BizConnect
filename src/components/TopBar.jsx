// components/TopBar.js
import React from 'react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md">
      <div className="flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <i className="fas fa-bars text-lg cursor-pointer" />
          <span className="ml-4 text-lg font-bold">Logo</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-bell text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;