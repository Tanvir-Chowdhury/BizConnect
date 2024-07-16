import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = ({ portal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const sidebarLinks = {
    entrepreneur: [
      { to: '/entrepreneur/profile', text: 'Profile' },
      { to: '/entrepreneur/startups', text: 'Startups' },
      { to: '/entrepreneur/findPartners', text: 'Find Co-founders' },
      { to: '/entrepreneur/findInvestors', text: 'Find Investors' },
      { to: '/entrepreneur/findMentors', text: 'Find Mentors' },
      { to: '/entrepreneur/findEmployees', text: 'Find Employees' },
      { to: '/entrepreneur/notifications', text: 'Notifications' },
    ],
    investor: [
      { to: '/investor/profile', text: 'Profile' },
      { to: '/investor/findStartups', text: 'Find Startups' },
      { to: '/investor/findMentees', text: 'Find Mentees' },
      { to: '/investor/notifications', text: 'Notifications' },
    ],
    student: [
      { to: '/student/profile', text: 'Profile' },
      { to: '/student/findJobs', text: 'Find Jobs' },
      { to: '/student/findPartners', text: 'Find Co-founders' },
      { to: '/student/notifications', text: 'Notifications' },
    ],
  };

  const links = sidebarLinks[portal] || [];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button onClick={toggleDrawer} className="lg:hidden fixed top-4 left-4 z-50 text-3xl text-white">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar Drawer */}
      <div className={`fixed top-15 left-0 h-full w-40 bg-gradient-to-b from-[#ad5389] to-[#b75cff] z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <ul className='divide-y divide-white flex flex-col h-full text-[#010312] w-full'>
          {links.map((link, index) => (
            <Link key={index} to={link.to} onClick={toggleDrawer}>
              <li className='  border-gray-700 font-extrabold py-5 hover:text-white hover:bg-gradient-to-r hover:from-[#8b24dd] hover:to-[#ac3cc9] text-sm text-center'>
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && <div onClick={toggleDrawer} className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"></div>}
    </div>
  );
};

export default Sidebar;
