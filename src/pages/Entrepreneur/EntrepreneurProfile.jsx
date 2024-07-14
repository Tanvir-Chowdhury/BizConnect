// // pages/EntrepreneurProfile.js
// import React, { useEffect, useState } from 'react';

const EntrepreneurProfile = ({ match }) => {
//   const [entrepreneur, setEntrepreneur] = useState(null);

//   useEffect(() => {
//     const fetchEntrepreneur = async () => {
//       try {
//         const response = await fetch(`/entrepreneurs.json`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const id = match.params.id; // Assuming you're using React Router to get the ID from the URL
//         const selectedEntrepreneur = data.find(entrepreneur => entrepreneur.id === id);
//         setEntrepreneur(selectedEntrepreneur);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchEntrepreneur();
//   }, [match.params.id]);

//   if (!entrepreneur) {
//     return <div>Loading...</div>; // Add a loading state while data is fetching
//   }

//   return (
//     <div className="p-4 ml-40">
//       <h1 className="text-2xl font-bold">{entrepreneur.fullName}'s Profile</h1>
//       <div className="mt-4">
//         <img src={entrepreneur.profilePicUrl} alt="Profile Picture" className="rounded-full w-32 h-32 mx-auto" />
//         <p className="text-lg text-center mt-4">{entrepreneur.bio}</p>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Contact Information</h2>
//           <p>Email: {entrepreneur.email}</p>
//           <p>Phone Number: {entrepreneur.phoneNumber}</p>
//           <p>Company: {entrepreneur.company}</p>
//           <p>Job Title: {entrepreneur.jobTitle}</p>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Skills</h2>
//           <ul className="list-disc list-inside">
//             {entrepreneur.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Experience</h2>
//           <ul className="list-disc list-inside">
//             {entrepreneur.experience.map((exp, index) => (
//               <li key={index}>
//                 {exp.title} at {exp.company} ({exp.startDate} - {exp.endDate})
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Education</h2>
//           <ul className="list-disc list-inside">
//             {entrepreneur.education.map((edu, index) => (
//               <li key={index}>
//                 {edu.degree} in {edu.fieldOfStudy} at {edu.school} ({edu.startDate} - {edu.endDate})
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Projects</h2>
//           <ul className="list-disc list-inside">
//             {entrepreneur.projects.map((project, index) => (
//               <li key={index}>{project.name}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Links</h2>
//           <p>
//             LinkedIn: <a href={entrepreneur.linkedIn}>{entrepreneur.linkedIn}</a>
//           </p>
//           <p>
//             Website: <a href={entrepreneur.website}>{entrepreneur.website}</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
};

export default EntrepreneurProfile;
