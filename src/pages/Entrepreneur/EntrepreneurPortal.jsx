// pages/EntrepreneurPortal.js
import React from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';
import Profile from "./Profile"

const EntrepreneurPortal = () => {
  return (
    <div className="flex h-screen">
      <Sidebar portal="entrepreneur" />
      <div className="flex-1">
        <TopBar portal="entrepreneur" />
      </div>
    </div>

  );
};

export default EntrepreneurPortal;