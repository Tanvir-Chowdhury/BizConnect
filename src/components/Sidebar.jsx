// components/Sidebar.js
import React from 'react';

const Sidebar = ({ portal }) => {
  const sidebarItems = {
    entrepreneur: [
      { label: 'Profile', link: '/Entrepreneur/Profile' },
      { label: 'Startups', link: '/Entrepreneur/Startups' },
      { label: 'Find Partners', link: '/Entrepreneur/FindPartners' },
      { label: 'Find Investors', link: '/Entrepreneur/FindInvestors' },
      { label: 'Find Mentors', link: '/Entrepreneur/FindMentors' },
      { label: 'Find Employees', link: '/Entrepreneur/FindEmployees' },
      { label: 'Notifications', link: '/Entrepreneur/Notifications' },
    ],
    investor: [
      { label: 'Profile', link: '/investor/profile' },
      { label: 'Find Startups', link: '/Investor/find-startups' },
      { label: 'Find Mentees', link: '/Investor/find-mentees' },
      { label: 'Notifications', link: '/Investor/notifications' },
    ],
    student: [
      { label: 'Profile', link: '/Student/profile' },
      { label: 'Find Jobs', link: '/Student/find-jobs' },
      { label: 'Find Partners', link: '/Student/find-partners' },
      { label: 'Notifications', link: '/Student/notifications' },
    ],
  };

  return (
    <div className="fixed left-0 top-16 w-64 h-screen bg-gray-100 shadow-md">
      <ul className="list-none m-0 p-0">
        {sidebarItems[portal].map((item, index) => (
          <li key={index} className="py-2 px-4 hover:bg-gray-200">
            <a href={item.link} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;