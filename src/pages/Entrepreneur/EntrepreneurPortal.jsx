// pages/EntrepreneurPortal.js
import React from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';

const EntrepreneurPortal = () => {
  return (
    <div className="flex h-screen">
      <Sidebar portal="entrepreneur" />
      <div className="flex-1 p-4">
        <TopBar />
        {/* Content will be rendered here */}
      </div>
    </div>
  );
};

export default EntrepreneurPortal;