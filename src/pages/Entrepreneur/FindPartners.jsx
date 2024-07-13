// pages/FindPartners.js
import React, { useEffect, useState } from 'react';

const FindPartners = () => {
  const [partners, setPartners]= useState([])
  useEffect(()=>{
    fetch('/public/findPartners.json')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setPartners(data);
    })
  },[]);
  function age(birthYear){
    return 2024-parseInt(birthYear);
  }
  return (
    <div className="bg-white">
      <div className="container mx-auto">
      <h1 className='text-center text-5xl font-bold text-black'>Find Partner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 min-h-screen gap-3">
          {
            partners.map((partner)=>(
              //console.log(partner.key)
              <div className="card bg-white shadow-xl" key={partner.id}>
              <figure className="px-10 pt-10">
                <img
                src={partner.profile_pic}
                alt="Profile Picture"
                className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center text-black">
              <h2 className="card-title">{partner.name}</h2>
              <p>Interested in <b>{partner.interested_fields.join(', ')}</b>.</p>
              <h3 className='text-xl'>Skills: <b>{partner.skills.join(', ')}</b></h3>
              {/* details */}
              <section className='flex justify-between flex-row w-full'>
              <button className="btn btn-ghost bg-gray-300" onClick={()=>document.getElementById(`modal${partner.id}`).showModal()}>See Details</button>
              <dialog id={`modal${partner.id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-white text-black">
                  <h3 className="font-bold text-lg">{partner.name}</h3>

                  <div className="flex flex-row items-center justify-evenly">
                  <img src={partner.profile_pic} alt="" />
                  <div className="text-base">
                    <h4>Skills: {partner.skills.join(', ')}</h4>
                    <h4>Interested Field: {partner.interested_fields.join(', ')}</h4>
                    <h4>Current Employment Type: {partner.current_employment_status}</h4>
                    <h4>Experience: {partner.experience}</h4>
                    <h4>Age: {age(partner.birth_year)}</h4>
                    <h4>Highest Educational Qualification: {partner.highest_educational_degree}</h4>
                    <h4>Average working hour/week he can give: {partner.average_working_hours}</h4>
                    <h4>E-mail: <a href={`mailto:${partner.email}`}>{partner.email}</a></h4>
                  </div>
                  </div>
                  <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn text-black bg-gray-200 hover:bg-white">Close</button>
                  </form>
                  </div>
                </div>
              </dialog>
              {/* contact */}
              <div className="card-actions">
                <button className="btn btn-ghost bg-gray-300"><a href={`mailto:${partner.email}`}>Contact</a></button>
              </div>
              </section>
              </div>
              </div>
            ))
          }
         </div>
      </div>
    </div>
  );
};

export default FindPartners;