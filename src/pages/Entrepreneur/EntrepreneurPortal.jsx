// pages/EntrepreneurPortal.js
import React from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';
import Profile from "./EntrepreneurProfile"
import { Outlet } from 'react-router-dom';

const EntrepreneurPortal = () => {
  return (
    <div>
      <TopBar portal="entrepreneur" />
    <div className="flex h-screen">
      <Sidebar portal="entrepreneur" />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </div >

  );
};

export default EntrepreneurPortal;