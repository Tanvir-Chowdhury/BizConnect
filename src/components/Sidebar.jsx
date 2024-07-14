import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ portal }) => {

  //const [links, setLinks]=useState([]);
  //useEffect(()=>{
    //fetch('/public/items.json')
    //.then(res=>res.json())
    //.then(data=>{
      //const roleLinks=data[portal] || [];
      //setLinks(roleLinks);
    //})
  //},[])

  // Define sidebar links based on role
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

  // Get links based on role
  const links = sidebarLinks[portal] || [];


  return (
    <div className="sidebar bg-gradient-to-b from-[#e0c3fc] to-[#b75cff] fixed h-full">
      <ul className='divide-y divide-white flex flex-col h-full text-[#010312] w-40'>
        {links.map((link, index) => (
          <Link key={index} to={link.to} className=''>
            <li key={index} className='border-b-2 border-t-2 border-gray-700 font-bold py-4 hover:bg-gray-700  w-full text-base text-center'>
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>

  );
};

export default Sidebar;
