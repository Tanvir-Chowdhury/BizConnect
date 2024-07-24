// pages/FindEmployees.js
import { useEffect, useState } from 'react';

const FindEmployees = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [skillFilter, setSkillFilter] = useState('');
  const [interestFilter, setInterestFilter] = useState(''); // Initialize as string
  const [userDetails, setUserDetails] = useState({});
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);

  // Function to fetch student data
  useEffect(() => {
    fetch('/public/student.json')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setFilteredStudents(data);
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

  // Function to fetch student projects
  useEffect(() => {
    fetch('/public/studentProject.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  // Function to fetch student certifications
  useEffect(() => {
    fetch('/public/studentCertification.json')
      .then(res => res.json())
      .then(data => setCertifications(data));
  }, []);

  // Function to filter students based on skills and interests
  useEffect(() => {
    const filtered = students.filter(student =>
      student.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase())) &&
      (interestFilter === '' || student.interested_fields.some(field => field.toLowerCase().includes(interestFilter.toLowerCase())))
    );
    setFilteredStudents(filtered);
  }, [skillFilter, interestFilter, students]);

  // Function to calculate age based on birth year
  function age(birthYear) {
    return 2024 - parseInt(birthYear, 10);
  }

  // Render function
  return (
    <div className="bg-gray-950 text-gray-300 lg:ml-40">
      <div className="container mx-auto pb-7">
        <h1 className='text-center text-4xl font-bold text-[#d4a1e9] py-7'>Find Employees</h1>

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

        {/* Displaying Students */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
          {filteredStudents.map(student => (
            <div className="card bg-[#221236] hover:bg-gradient-to-r hover:from-[#8b24dd] hover:to-[#ac3cc9] shadow-xl" key={student.email}>

              {/* Card Body */}
              <div className="card-body items-center text-center">
                {/* <h2 className="card-title text-2xl">{student.name}</h2> */}
                {userDetails[student.email] && (
                  <div>
                    <h2 className='card-title text-2xl'>{userDetails[student.email].name}</h2>
                  </div>
                )}
                <p>Interested in <b>{student.interested_fields.join(', ')}</b>.</p>
                <h3 className='text-lg'>Skills: <b>{student.skills.join(', ')}</b></h3>

                {/* Fetch and display student projects */}
                <section className='flex justify-between flex-row w-full'>
                  <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white" onClick={() => document.getElementById(`modal${student.email}`).showModal()}>See Details</button>

                  {/* Modal Dialog Definition */}
                  <dialog id={`modal${student.email}`} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                      <div className="p-8">
                        {/* User Name */}
                        <h3 className="font-bold text-2xl text-white mb-4">{student.name}</h3>

                        {/* User Details */}
                        {userDetails[student.email] && (
                          <div className="mb-6">
                            <h2 className="text-2xl text-white font-bold">{userDetails[student.email].name}</h2>
                            <p className="text-white">Phone Number: {userDetails[student.email]?.phone_number}</p>
                            <p className="text-white">LinkedIn: {userDetails[student.email]?.linkedin}</p>
                            {userDetails[student.email]?.website && <p className="text-white">Website: {userDetails[student.email].website}</p>}
                          </div>
                        )}

                        {/* Additional Details */}
                        <div className="flex flex-wrap mb-6">
                          <div className="w-full lg:w-1/2">
                            <h4 className="font-bold text-lg text-white">Skills:</h4>
                            <p className="text-white">{student.skills.join(', ')}</p>
                          </div>
                          <div className="w-full lg:w-1/2">
                            <h4 className="font-bold text-lg text-white">Interested Field:</h4>
                            <p className="text-white">{student.interested_fields.join(', ')}</p>
                          </div>
                        </div>

                        {/* Employment and Educational Details */}
                        <div className="flex flex-wrap mb-6">
                          <div className="w-full lg:w-1/2">
                            <h4 className="font-bold text-lg text-white">Current Employment Type:</h4>
                            <p className="text-white">{student.current_employment_status ? 'Employed' : 'Unemployed'}</p>
                          </div>
                          <div className="w-full lg:w-1/2">
                            <h4 className="font-bold text-lg text-white">Experience:</h4>
                            <p className="text-white">{student.experience}</p>
                          </div>
                          <div className="w-full lg:w-1/2">
                          {userDetails[student.email] && (
                          <div className="mb-6">
                            <h4 className="font-bold text-lg text-white">Age: {age(userDetails[student.email].birth_year)}</h4>
                          </div>
                        )}
                          </div>
                          <div className="w-full lg:w-1/2">
                            <h4 className="font-bold text-lg text-white">Highest Educational Qualification:</h4>
                            <p className="text-white">{student.highest_education_degree}</p>
                            <h4 className="font-bold text-lg text-white">Result:</h4>
                            <p className="text-white">CGPA/GPA: {student.last_result}</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                          <h4 className="font-bold text-lg text-white">Email:</h4>
                          <p className="text-white"><a href={`mailto:${student.email}`}>{student.email}</a></p>
                        </div>

                        {/* Projects Table */}
                        <div className="mb-6">
                          <h4 className="font-bold text-lg text-white mb-3">Projects:</h4>
                          <div className="overflow-x-auto rounded-lg border border-gray-300">
                            <table className="min-w-full bg-white rounded-lg">
                              <thead className="bg-[#ad5389] text-white">
                                <tr>
                                  <th className="py-2 px-4">Title</th>
                                  <th className="py-2 px-4">Description</th>
                                  <th className="py-2 px-4">Skills</th>
                                  <th className="py-2 px-4">GitHub URL</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-700">
                                {projects
                                  .filter(project => project.email === student.email)
                                  .map(project => (
                                    <tr key={project.project_title}>
                                      <td className="py-2 px-4">{project.project_title}</td>
                                      <td className="py-2 px-4">{project.description}</td>
                                      <td className="py-2 px-4">{project.project_skills.join(', ')}</td>
                                      <td className="py-2 px-4"><a href={project.project_url} target="_blank" rel="noopener noreferrer">{project.project_url}</a></td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Certifications Table */}
                        <div className="mb-6">
                          <h4 className="font-bold text-lg text-white mb-3">Certifications:</h4>
                          <div className="overflow-x-auto rounded-lg border border-gray-300">
                            <table className="min-w-full bg-white rounded-lg">
                              <thead className="bg-[#ad5389] text-white">
                                <tr className=''>
                                  <th className="py-2 px-4">Title</th>
                                  <th className="py-2 px-4">Issued By</th>
                                  <th className="py-2 px-4">Date</th>
                                  <th className="py-2 px-4">Description</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-700">
                                {certifications
                                  .filter(certification => certification.email === student.email)
                                  .map(certification => (
                                    <tr key={certification.certificate_title}>
                                      <td className="py-2 px-4">{certification.certificate_title}</td>
                                      <td className="py-2 px-4">{certification.issuedby}</td>
                                      <td className="py-2 px-4">{certification.date}</td>
                                      <td className="py-2 px-4">{certification.description}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Modal Dialog Action */}
                        <div className="flex justify-end">
                          <button className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white" onClick={() => document.getElementById(`modal${student.email}`).close()}>Close</button>
                        </div>
                      </div>
                    </div>
                  </dialog>




                  {/* Contact Button */}
                  <div className="card-actions">
                    <button className="btn btn-ghost bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-[#462a5f] font-bold hover:text-white">
                      <a href={`mailto:${student.email}`}>Contact</a>
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

export default FindEmployees;
