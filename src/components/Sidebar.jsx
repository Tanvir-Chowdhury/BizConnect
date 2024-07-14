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
      { to: '/entrepreneur/findPartners', text: 'Find Partners' },
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
      { to: '/student/findPartners', text: 'Find Partners' },
      { to: '/student/notifications', text: 'Notifications' },
    ],
  };

  // Get links based on role
  const links = sidebarLinks[portal] || [];


  return (
    <div className="sidebar bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <ul className='divide-y divide-white'>
        {links.map((link, index) => (
          <Link key={index} to={link.to} className=''>
            <li key={index} className='border-b-2 border-gray-400 text-white py-4 hover:bg-gray-400 hover:text-gray-800 w-full text-xl px-6'>
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>

  );
};

export default Sidebar;
