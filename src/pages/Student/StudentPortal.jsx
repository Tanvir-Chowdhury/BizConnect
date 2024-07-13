// pages/StudentPortal.js
import React from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';

const StudentPortal = () => {
  return (
    <div className="flex h-screen">
      <Sidebar portal="student" />
      <div className="flex-1">
        <TopBar portal="student" />
        {/* Content will be rendered here */}
      </div>
    </div>
  );
};

export default StudentPortal;
