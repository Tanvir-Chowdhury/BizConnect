// components/Sidebar.js
import React, { useEffect, useState } from 'react';

const Sidebar = ({ portal }) => {
  const [links, setLinks]=useState([]);
  useEffect(()=>{
    fetch('items.json')
    .then(res=>res.json())
    .then(data=>{
      const roleLinks=data[portal] || [];
      setLinks(roleLinks);
    })
  },[])

  return (
    <div className="">
      <div className="fixed left-0 top-16 w-64 h-screen bg-gray-100 shadow-md hidden md:flex">
      <ul className="list-none m-0 p-0 w-full">
        {
          links.map((item,index)=>(
            <li key={index} className='p-1 md:p-3 lg:p-5 hover:bg-gray-400 w-full text-xl'>
              <a className='text-black' href={item.link}>{item.label}</a>
            </li>
          ))
        }
      </ul>
      </div>

      <div className="fixed left-0 top-16 w-screen bg-white shadow-md md:hidden">
      <div className="drawer justify-center">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-white font-semibold">Menu</label>
        </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-white text-base-content min-h-full w-1/2 px-2 py-4">
            {/* Sidebar content here */}
            {
            links.map((item,index)=>(
              <li key={index} className='p-1 md:p-3 lg:p-5'>
                <a className='text-black' href={item.link}>{item.label}</a>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Sidebar;