// pages/FindInvestors.js
import React, { useEffect, useState } from 'react';

const FindInvestors = () => {
  const [investors, setInvestors] = useState([]);
  const [filteredInvestors, setFilteredInvestors] = useState([]);
  const [skillFilter, setSkillFilter] = useState('');
  const [interestFilter, setInterestFilter] = useState('');
  const [userDetails, setUserDetails] = useState({});

   // Fetch investor data
   useEffect(() => {
    fetch('/public/investor.json')
      .then(res => res.json())
      .then(data => {
        // Filter out investors who are not open for investments
        const filteredData = data.filter(investor => investor.open_for_investments);
        setInvestors(filteredData);
        setFilteredInvestors(filteredData);
      });
  }, []);

  // Function to fetch user details
  useEffect(() => {
    fetch('/public/user.json')
      .then(res => res.json())
      .then(data => {
        // Organize user details by email for easy lookup
        const userDetailsMap = {};
        data.forEach(user => {
          userDetailsMap[user.email] = user;
        });
        setUserDetails(userDetailsMap);
      });
  }, []);

  // Filter investors based on skills and interests
  useEffect(() => {
    const filtered = investors.filter(investor =>
      investor.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase())) &&
      investor.interested_fields.some(field => field.toLowerCase().includes(interestFilter.toLowerCase()))
    );
    setFilteredInvestors(filtered);
  }, [skillFilter, interestFilter, investors]);

  // Function to calculate age based on birth year
  function age(birthYear) {
    return 2024 - parseInt(birthYear, 10);
  }

  // Render function
  return (
    <div className="bg-gray-950 text-gray-300 md:ml-40">
      <div className="container mx-auto pb-7">
        <h1 className='text-center text-4xl font-bold text-[#d4a1e9] py-7'>Find Investors</h1>

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

        {/* Investors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
          {filteredInvestors.map((investor) => (
            <div className="card bg-[#221236] hover:bg-gradient-to-r hover:from-[#8b24dd] hover:to-[#ac3cc9] shadow-xl" key={investor.email}>
              <div className="card-body items-center text-center">
              {userDetails[investor.email] && (
                            <div className="text-white">
                              <h4 className='font-bold text-2xl my-4'> {userDetails[investor.email].name}</h4>
                            </div>
                          )}
                <p>Interested in <b>{investor.interested_fields.join(', ')}</b>.</p>
                <h3 className='text-lg'>Skills: <b>{investor.skills.join(', ')}</b></h3>

                <section className='flex justify-between flex-row w-full'>
                  <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white" onClick={() => document.getElementById(`modal${investor.email}`).showModal()}>See Details</button>

                  {/* Modal Dialog */}
                  <dialog id={`modal${investor.email}`} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black rounded-lg">
                      <h3 className="font-bold text-lg text-white">{investor.name}</h3>
                      <div className="flex flex-row items-center justify-evenly">
                        <div>
                          {/* Fetching and displaying user details */}
                          {userDetails[investor.email] && (
                            <div className="text-white">
                              <h4 className='font-bold text-2xl my-4'> {userDetails[investor.email].name}</h4>
                              <p>Phone Number: {userDetails[investor.email].phone_number}</p>
                              <p>LinkedIn: {userDetails[investor.email].linkedin}</p>
                              {userDetails[investor.email].website && <p>Website: {userDetails[investor.email].website}</p>}
                            </div>
                          )}

                          {/* Investor Details */}
                          <div className="text-base text-white mt-4">
                            <h4>Skills: {investor.skills.join(', ')}</h4>
                            <h4>Interested Field: {investor.interested_fields.join(', ')}</h4>
                            <h4>Experience: {investor.experience}</h4>
                            <h4>Current Investments: ${investor.total_investments.toLocaleString()}</h4>
                            <h4>Companies: {investor.company_names.join(', ')}</h4>
                            <h4>Open for Investments: {investor.open_for_investments ? 'Yes' : 'No'}</h4>
                            <h4>Open for Mentorship: {investor.open_for_mentorship ? 'Yes' : 'No'}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white" onClick={() => document.getElementById(`modal${investor.email}`).close()}>Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <div className="card-actions">
                    <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white">
                      <a href={`mailto:${investor.email}`}>Contact</a>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindInvestors;
