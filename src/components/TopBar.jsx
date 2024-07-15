// components/TopBar.js
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

const TopBar = ({portal}) => {
  // notification number
  const notificationNumber=2;
  // notification details array
  const notificationDetails=[
    {id:1, name: "Notification-1"},
    {id:2, name: "Notification-2"},
  ];
  // import link from json
  const [link,setLink]=useState('');
  const [profile,setProfile]=useState('');
  useEffect(()=>{
    fetch('/public/topBarJson/topBar.json')
    .then(res=>res.json())
    .then(data=>{
      const notificationPage=data[portal].find(item=>item.label==='Notifications');
      setLink(notificationPage.link);
    })
  },[])
  useEffect(()=>{
    fetch('/public/topBarJson/topBar.json')
    .then(res=>res.json())
    .then(data=>{
      const profilePage=data[portal].find(item=>item.label==='Profile');
      setProfile(profilePage.link);
    })
  },[])
  return (

    <div className="navbar bg-gradient-to-l from-[#ad5389] to-[#3c1053] w-full h-16 sticky top-0 z-50">

    <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold text-black mb-4">
      <img width= "200px" src="../../public/logo/BizConnect.png" alt="" />
    </a>
    </div>
    <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-4">
        <div className="indicator tooltip tooltip-bottom">
          <span className="loading loading-ring loading-sm indicator-item badge font-bold badge-neutral text-white"></span>
          <div className=" grid place-items-center text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-white text-black z-[1] mt-3 w-52 shadow ">
        <div className="card-body">
          {/* notification number */}
          <span className="text-lg font-bold">{notificationNumber} Notifications</span>
          {/* notification details */}
          <ul>
          {
            notificationDetails.map(notificationDetail=>
              <li key={notificationDetail.id} className='border-b'>{notificationDetail.name}</li>
            )
          }
          </ul>
          {/* redirect to notification tab */}
          <span className="text-info text-center"><a href={link}>See All</a></span>
          

        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-4">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        <li>
          {/* redirect in profile page */}
          <a className="justify-between" href={profile}>
            Profile
          </a>
        </li>
        {/* redirect to profile for setting you can remove it */}
        <li><a href={profile}>Settings</a></li>
        <li><a href='/login'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default TopBar;