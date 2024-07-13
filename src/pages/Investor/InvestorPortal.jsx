// pages/InvestorPortal.js
import React from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';

const InvestorPortal = () => {
  return (
    <div className="flex h-screen">
      <Sidebar portal="investor" />
      <div className="flex-1">
        <TopBar portal="investor"/>
        {/* Content willbe rendered here */}
      </div>
    </div>
  );
};

export default InvestorPortal;