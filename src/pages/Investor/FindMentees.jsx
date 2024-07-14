// pages/FindPartners.js
import React, { useEffect, useState } from 'react';

const FindMentees = () => {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [skillFilter, setSkillFilter] = useState('');
  const [interestFilter, setInterestFilter] = useState('');

  useEffect(() => {
    fetch('/public/findPartners.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPartners(data);
        setFilteredPartners(data);
      });
  }, []);

  useEffect(() => {
    const filtered = partners.filter(partner => 
      partner.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase())) &&
      partner.interested_fields.some(field => field.toLowerCase().includes(interestFilter.toLowerCase()))
    );
    setFilteredPartners(filtered);
  }, [skillFilter, interestFilter, partners]);

  function age(birthYear) {
    return 2024 - parseInt(birthYear);
  }

  return (

    <div className="bg-gray-950 text-gray-300 ml-40 h-full">
      <div className="container mx-auto pb-7">
        <h1 className='text-center text-4xl font-bold text-[#d4a1e9] py-7'>Find Mentees</h1>

        
        {/* Filters Section */}
        <div className="flex justify-center space-x-4 py-4">
          {/* Skill Filter */}
          <input 
            type="text" 
            placeholder="Search by skills..." 

            className="p-2 px-4 rounded-full bg-white text-gray-800 placeholder-gray-500"

            value={skillFilter}
            onChange={e => setSkillFilter(e.target.value)}
          />
          {/* Interest Filter */}
          <input 
            type="text" 
            placeholder="Search by interests..." 

            className="p-2 px-4 rounded-full bg-white text-gray-800 placeholder-gray-500"

        

            value={interestFilter}
            onChange={e => setInterestFilter(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mx-5">
          {
            filteredPartners.map((partner) => (

              <div className="card bg-[#221236] hover:bg-gradient-to-r hover:from-[#8b24dd] hover:to-[#ac3cc9] shadow-xl" key={partner.id}>

                <figure className="px-10 pt-10">
                  <img
                    src={partner.profile_pic}
                    alt="Profile Picture"
                    className="rounded-xl w-40" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title text-2xl">{partner.name}</h2>
                    <p>Interested in <b>{partner.interested_fields.join(', ')}</b>.</p>
                    <h3 className='text-lg'>Skills: <b>{partner.skills.join(', ')}</b></h3>
                  <section className='flex justify-between flex-row w-full'>

                    <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white" onClick={() => document.getElementById(`modal${partner.id}`).showModal()}>See Details</button>
                    <dialog id={`modal${partner.id}`} className="modal">
                      <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black ">
                        <h3 className="font-bold text-lg text-white">{partner.name}</h3>

                        <div className="flex flex-row items-center justify-evenly">
                          <img src={partner.profile_pic} alt="" />
                          <div className="text-base text-white">

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

                            <button className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white">Close</button>

                          </form>
                        </div>
                      </div>
                    </dialog>
                    <div className="card-actions">

                      <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white"><a href={`mailto:${partner.email}`}>Contact</a></button>

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

export default FindMentees;
