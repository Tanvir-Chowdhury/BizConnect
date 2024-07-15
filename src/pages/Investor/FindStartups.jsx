// pages/FindStartups.jsx
import React, { useEffect, useState } from 'react';

const FindStartups = () => {
    const [startups, setStartups] = useState([]);
    const [entreProfiles, setEntreProfiles] = useState([]);
    const [filteredStartups, setFilteredStartups] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [industryFilter, setIndustryFilter] = useState('');

    useEffect(() => {
        // Fetch startup data
        fetch('/public/startups.json')
            .then(res => res.json())
            .then(data => {
                setStartups(data);
                setFilteredStartups(data);
            });

        // Fetch entrepreneur profiles
        fetch('/public/entrprofile.json')
            .then(res => res.json())
            .then(data => setEntreProfiles(data));
    }, []);

    useEffect(() => {
        const filtered = startups.filter(startup =>
            startup.startup_name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            startup.industry.toLowerCase().includes(industryFilter.toLowerCase())
        );
        setFilteredStartups(filtered);
    }, [nameFilter, industryFilter, startups]);

    // Match startup with entrepreneur profile
    const getEntrepreneurProfile = (email) => {
        return entreProfiles.find(profile => profile.email === email);
    };

    return (
        <div className="bg-gray-950 text-gray-300 ml-40">
            <div className="container mx-auto pb-7">
                <h1 className='text-center text-4xl font-bold text-[#d4a1e9] py-7'>Find Startups</h1>

                {/* Filters Section */}
                <div className="flex justify-center space-x-4 py-4">
                    {/* Name Filter */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="p-2 px-4 rounded-full bg-white text-gray-800 placeholder-gray-500"
                        value={nameFilter}
                        onChange={e => setNameFilter(e.target.value)}
                    />
                    {/* Industry Filter */}
                    <input
                        type="text"
                        placeholder="Search by industry..."
                        className="p-2 px-4 rounded-full bg-white text-gray-800 placeholder-gray-500"
                        value={industryFilter}
                        onChange={e => setIndustryFilter(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
                    {
                        filteredStartups.map((startup, index) => {
                            const profile = getEntrepreneurProfile(startup.email);
                            return (
                                <div className="card bg-[#221236] hover:bg-gradient-to-r hover:from-[#8b24dd] hover:to-[#ac3cc9] shadow-xl" key={index}>
                                    <div className="card-body items-center text-center ">
                                        <h2 className="card-title text-2xl">{startup.startup_name}</h2>
                                        {profile && (
                                            <>
                                                <h3 className='text-lg'>Founder: <b>{profile.fullName}</b></h3>
                                                <p>{profile.bio}</p>
                                            </>
                                        )}
                                        <h3 className='text-lg'>Industry: <b>{startup.industry}</b></h3>
                                        <h3 className='text-lg'>Total Funding Raised: <b>${startup.total_funding_raised}</b></h3>
                                        <h3 className='text-lg'>Funding Goal: <b>${startup.funding_goal}</b></h3>
                                        <h3 className='text-lg'>Current Funding: <b>${startup.current_funding}</b></h3>
                                        <section className='flex justify-between flex-row w-full'>
                                            <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white" onClick={() => document.getElementById(`modal${index}`).showModal()}>See Details</button>
                                            <dialog id={`modal${index}`} className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-8 rounded-lg shadow-lg">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {/* Left Column */}
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h3 className="font-bold text-3xl text-white">{startup.startup_name}</h3>
                                                                <h4 className="font-bold text-xl text-white">Description</h4>
                                                                <p>{startup.description}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-xl text-white">Funding Information</h4>
                                                                <p>Total Funding Raised: ${startup.total_funding_raised}</p>
                                                                <p>Funding Goal: ${startup.funding_goal}</p>
                                                                <p>Current Funding: ${startup.current_funding}</p>
                                                                <p>Open for Fund Raising: {startup.open_for_fund_raising ? "Yes" : "No"}</p>
                                                                <p>Date: {startup.date}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-xl text-white">Contact Information</h4>
                                                                <p>Email: <a href={`mailto:${startup.email}`} className="text-gray-200">{startup.email}</a></p>
                                                            </div>
                                                        </div>
                                                        {/* Right Column */}
                                                        {profile && (
                                                            <div className="space-y-4">
                                                                <div className="flex flex-col items-center">
                                                                    <h4 className="font-bold text-2xl text-white">{profile.fullName}</h4>
                                                                    <p className="text-gray-300">{profile.jobTitle} at {profile.company}</p>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Bio</h4>
                                                                    <p>{profile.bio}</p>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Skills</h4>
                                                                    <p>{profile.skills.join(', ')}</p>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Experience</h4>
                                                                    {profile.experience.map((exp, i) => (
                                                                        <p key={i}>{exp.title} at {exp.company} ({exp.startDate} - {exp.endDate})</p>
                                                                    ))}
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Education</h4>
                                                                    {profile.education.map((edu, i) => (
                                                                        <p key={i}>{edu.degree} in {edu.fieldOfStudy} from {edu.school} ({edu.startDate} - {edu.endDate})</p>
                                                                    ))}
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Projects</h4>
                                                                    <p>{profile.projects.map(proj => proj.name).join(', ')}</p>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl text-white">Social Links</h4>
                                                                    <p>LinkedIn: <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-200">{profile.linkedIn}</a></p>
                                                                    <p>Website: <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-gray-200">{profile.website}</a></p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="modal-action mt-4">
                                                        <button className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold" onClick={() => document.getElementById(`modal${index}`).close()}>Close</button>
                                                    </div>
                                                </div>
                                            </dialog>
                                            <div className="card-actions">
                                                <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white"><a href={`mailto:${startup.email}`}>Contact</a></button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FindStartups;
