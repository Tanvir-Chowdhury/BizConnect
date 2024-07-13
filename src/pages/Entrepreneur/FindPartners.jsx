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
  return (
    <div className="bg-white">
      <div className="container mx-auto">
      <h1 className='text-center text-5xl font-bold text-black'>Find Partner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 min-h-screen">
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
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={()=>document.getElementById(`modal${partner.id}`).showModal()}>open modal</button>
              <dialog id={`modal${partner.id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Click the button below to close</p>
                  <div className="modal-action">
                  <form method="dialog">
        {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                  </div>
                </div>
              </dialog>
              {/* contact */}
              <div className="card-actions">
                
                <button className="btn btn-primary"><a href={`mailto:${partner.email}`}>Contact</a></button>
              </div>
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