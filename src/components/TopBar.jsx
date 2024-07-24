import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { FiSettings } from "react-icons/fi";
import { BiEditAlt, BiLogOut, BiNotification } from "react-icons/bi";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

// Temp data
const TEMPtargetUser = 
  {
    name: "ayon",
    email: "sa@gmail.com",
    phone: "01761992988",
    username: "ayO_On",
    role: "student",
    date: new Date().toISOString,
    birth_year: 2023,
    birth_day: 2,
    birth_month: 23,
    linkedin: "www.linkdin/ayon",
    website: "www.ayon.com",
    gender: "male",
  }

const TEMPstudent = 
  {
    email: "sa@gmail.com",
    major: "CSE",
    graduation_year: 2023,
    introduction: "hey there i am student",
    skills: ["react", "mern", "communication", "js", "html"],
    interested_fields: ["webdev", "ml", "ai"],
    experience: "2 years of exp",
    current_employment_status: false,
    highest_education_degree: "HSC",
    last_result: 3.45,
    open_for_employment: true,
    date: new Date().toISOString(),
  };

const TEMPinvestor = 
  {
    email: "sa@gmail.com",
    interested_fields: ["webdev", "ml", "ai"],
    skills: ["react", "mern", "communication", "js", "html"],
    experience: "2 years of exp",
    introduction: "hey there i am investor",
    total_investments: 2000,
    company_names: ["aCom", "bCom"],
    open_for_investments: true,
    open_for_mentorship: true,
    date: new Date().toISOString(),
  };
const TEMPentrepreneur = 
  {
    email: "sa@gmail.com",
    industry: "Web Devlopement",
    introduction: "hey there I am entre",
    current_employment_status: true,
    job_title: "Web Devloper",
    skills: ["react", "mern", "communication", "js", "html"],
    interested_fields: ["webdev", "ml", "ai"],
    experience: "5 years at Caltech",
    total_fund_raised: 200,
    company_names: ['a','b'],
    open_for_partnership: true,
    date: new Date().toISOString(),
  };

const TopBar = ({ portal }) => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // get the user role here

  // notification details array
  // username sent you an type request
  // Need to fix

  const notificationMessege = (notification) => {
    if (notification.type === "job") {
      return `${notification.from_username} applied for the job ${notification.target_id}.`;
    }
    if (notification.type === "funding") {
      return `${notification.from_username} wants to fund for your company ${notification.target_id}.`;
    }
    if (notification.type === "partner") {
      return `${notification.from_username} wants to be business partners.`;
    }
    if (notification.type === "mentorship") {
      return `${notification.from_username} applied for mentorship from you.`;
    }
    if (notification.type === "mentee"){
      return `${notification.from_username} wants to be your mentor.`;
    }
  };

  const handleDelete = async (_id) => {
    //delete the id
  };

  function age(birthYear) {
    return 2024 - parseInt(birthYear, 10);
  }
  const [targetUser, setTargetuser] = useState({})
  const [entrepreneur, setEntrepreneur] = useState({})
  const [student, setStudent] = useState({})
  const [investor, setInvestor] = useState({})

  const handleSeeProfile =(noti) =>{
    if(noti.type==='partner' || noti.type ==='mentorship'){
      //get the common data
      setTargetuser(TEMPtargetUser)
      //get the data using noti.target_id
      setEntrepreneur(TEMPentrepreneur)
      document
      .getElementById(`entrepreneur`)
      .showModal()
    }

    if(noti.type==='funding' || noti.type ==='mentee'){
      //get the common data
      setTargetuser(TEMPtargetUser)
      //get data
      setInvestor(TEMPinvestor)
      document
      .getElementById(`investor`)
      .showModal()
    }

    if(noti.type ==='job'){
      //get the common data
      setTargetuser(TEMPtargetUser)
      //get Data
      setStudent(TEMPstudent)
      document
      .getElementById(`student`)
      .showModal()
    }
  }
  
  const notifications = [
    {
      _id: 1,
      from: "mentee@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "mentee",
      target_id: "sdddsasddas",
    },
    {
      _id: 1,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "job",
      target_id: "sdddsasddas",
    },
    {
      _id: 2,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "job",
      target_id: "sdddsasddas",
    },
    {
      _id: 3,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "mentorship",
      target_id: "sdddsasddas",
    },
    {
      _id: 4,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "mentorship",
      target_id: "sdddsasddas",
    },
    {
      _id: 5,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "funding",
      target_id: "sdddsasddas",
    },
    {
      _id: 6,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "funding",
      target_id: "sdddsasddas",
    },
    {
      _id: 7,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "partner",
      target_id: "sdddsasddas",
    },
    {
      _id: 8,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "partner",
      target_id: "sdddsasddas",
    },
    {
      _id: 9,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "partner",
      target_id: "sdddsasddas",
    },
    {
      _id: 10,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "mentorship",
      target_id: "sdddsasddas",
    },
    {
      _id: 11,
      from: "from@gmail.com",
      from_username: "ayon",
      to: "to@gmail.com",
      date: new Date().toISOString(),
      type: "mentorship",
      target_id: "sdddsasddas",
    },
  ];

  const handleLogout = async () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className=" navbar bg-gradient-to-l from-[#ad5389] to-[#3c1053] w-full h-16 sticky top-0 z-50 ">
      <div className="flex-1">
        <a className="text-xl font-bold text-black md:pb-2">
          <img
            className="md:w-[200px] w-[120px] ml-14 lg:ml-0"
            src="../../public/logo/BizConnect.png"
            alt=""
          />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-4"
          >
            <div className="indicator tooltip tooltip-bottom">
              <span className="loading loading-ring loading-sm indicator-item badge font-bold badge-neutral text-white"></span>
              <div className=" grid place-items-center text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-white text-black z-[1] mt-3 w-64 max-h-96 shadow overflow-y-scroll"
          >
            <div className="card-body">
              {/* notification number */}
              <div className="">
                <span className="text-lg font-bold">
                  {notifications.length} Notifications
                </span>
                <hr />
              </div>
              {/* notification details */}
              <ul className="my-2">
                {notifications.map((noti) => (
                  <li key={noti._id} className="border-b text-base">
                    <div className="flex flex-row justify-start items-start gap-1">
                      <span className="text-xl mt-1">
                        <BiNotification />
                      </span>
                      {notificationMessege(noti)}
                    </div>
                    <div className="flex  flex-row justify-end items-center mb-3 mt-1 gap-1">
                      {/* //job, funding, partner, mentorship */}
                      <div>
                        <button
                          className="btn btn-sm bg-gradient-to-r from-[#e9aafd] to-[#b4abfd] hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-black text-sm font-thin hover:text-white"
                          onClick={()=>handleSeeProfile(noti)}
                        >
                          See Profile
                        </button>

                        {/* Entrepreneurs Modal (business partner or asking for mentorship) */}
                        <dialog
                          id={`entrepreneur`}
                          className="modal"
                        >
                          <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                            <div className="p-8">
                            <h3 className="font-bold text-2xl text-white ">
                                {targetUser?.name}
                              </h3>
                              <h4 className="text-xl text-white mb-4">{entrepreneur?.introduction || "No bio added"}</h4>
                              {/* User Details */}
                              {targetUser?.email && (
                                <div className="mb-6">
                                  <h2 className="text-2xl text-white font-bold">
                                    {targetUser?.email}
                                  </h2>
                                  <p className="text-white">
                                    Phone Number: {targetUser?.phone_number}
                                  </p>
                                  <p className="text-white">
                                    LinkedIn: {targetUser?.linkedin}
                                  </p>
                                  {targetUser.website.length > 0 && (
                                    <p className="text-white">
                                      Website: {targetUser?.website}
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* Additional Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Skills:
                                  </h4>
                                  <p className="text-white">
                                    {entrepreneur?.skills?.join(' | ') || "No Skill info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Interested Field:
                                  </h4>
                                  <p className="text-white">
                                    {entrepreneur?.interested_fields?.join(' | ') || "No Intersting field info"}
                                  </p>
                                </div>
                              </div>

                              {/* Employment and Experience Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Current Employment Type:
                                  </h4>
                                  <p className="text-white">
                                    {entrepreneur?.current_employment_status
                                      ? "Employed"
                                      : "Unemployed"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Experience:
                                  </h4>
                                  <p className="text-white">
                                    {entrepreneur?.experience  || "No Experience info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  {targetUser.email && (
                                    <div className="mb-6">
                                      <h4 className="font-bold text-lg text-white">
                                        Age: {age(targetUser?.birth_year)}
                                      </h4>
                                    </div>
                                  )}
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Total Fund Raised:
                                  </h4>
                                  <p className="text-white">
                                    ${entrepreneur?.total_fund_raised}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Company Names:
                                  </h4>
                                  <p className="text-white">
                                    {entrepreneur?.company_names?.join(' | ') || "No companies info"}
                                  </p>
                                </div>
                              </div>

                              {/* Email */}
                              <div className="mb-6">
                                <h4 className="font-bold text-lg text-white">
                                  Email:
                                </h4>
                                <p className="text-white">
                                  <a href={`mailto:${entrepreneur.email}`}>
                                    {entrepreneur.email}
                                  </a>
                                </p>
                              </div>

                              {/* Modal Dialog Action */}
                              <div className="flex justify-end">
                                <button
                                  className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white"
                                  onClick={() =>
                                    document
                                      .getElementById(
                                        `entrepreneur`
                                      )
                                      .close()
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </dialog>


                        {/* Studnets Modal (applied for job)*/}
                        <dialog
                          id={`student`}
                          className="modal"
                        >
                          <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                            <div className="p-8">
                              <h3 className="font-bold text-2xl text-white ">
                                {targetUser?.name}
                              </h3>
                              <h4 className="text-xl text-white mb-4">{student?.introduction || "No bio added"}</h4>
                              {/* User Details */}
                              {targetUser?.email && (
                                <div className="mb-6">
                                  <h2 className="text-2xl text-white font-bold">
                                    {targetUser?.email}
                                  </h2>
                                  <p className="text-white">
                                    Phone Number: {targetUser?.phone_number}
                                  </p>
                                  <p className="text-white">
                                    LinkedIn: {targetUser?.linkedin}
                                  </p>
                                  {targetUser.website.length > 0 && (
                                    <p className="text-white">
                                      Website: {targetUser?.website}
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* Additional Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Skills:
                                  </h4>
                                  <p className="text-white">
                                    {student?.skills?.join(' | ') || "No Skill info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Interested Field:
                                  </h4>
                                  <p className="text-white">
                                    {student?.interested_fields?.join(' | ') || "No Intersting field info"}
                                  </p>
                                </div>
                              </div>

                              {/* Employment and Experience Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Current Employment Type:
                                  </h4>
                                  <p className="text-white">
                                    {student?.current_employment_status
                                      ? "Employed"
                                      : "Unemployed"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Experience:
                                  </h4>
                                  <p className="text-white">
                                    {student?.experience  || "No Experience info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  {targetUser.email && (
                                    <div className="mb-6">
                                      <h4 className="font-bold text-lg text-white">
                                        Age: {age(targetUser?.birth_year)}
                                      </h4>
                                    </div>
                                  )}
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Lastest Degree:
                                  </h4>
                                  <p className="text-white">
                                    {student?.highest_education_degree || "No degree Info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Result:
                                  </h4>
                                  <p className="text-white">
                                    {student.last_result || "No result Info"}
                                  </p>
                                </div>
                              </div>

                              {/* Email */}
                              <div className="mb-6">
                                <h4 className="font-bold text-lg text-white">
                                  Email:
                                </h4>
                                <p className="text-white">
                                  <a href={`mailto:${targetUser.email}`}>
                                    {targetUser.email}
                                  </a>
                                </p>
                              </div>

                              {/* Modal Dialog Action */}
                              <div className="flex justify-end">
                                <button
                                  className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white"
                                  onClick={() =>
                                    document
                                      .getElementById(
                                        `student`
                                      )
                                      .close()
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </dialog>

                        <dialog
                          id={`investor`}
                          className="modal"
                        >
                          <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                            <div className="p-8">
                              <h3 className="font-bold text-2xl text-white ">
                                {targetUser?.name}
                              </h3>
                              <h4 className="text-xl text-white mb-4">{investor?.introduction || "No bio added"}</h4>
                              {/* User Details */}
                              {targetUser?.email && (
                                <div className="mb-6">
                                  <h2 className="text-2xl text-white font-bold">
                                    {targetUser?.email}
                                  </h2>
                                  <p className="text-white">
                                    Phone Number: {targetUser?.phone_number}
                                  </p>
                                  <p className="text-white">
                                    LinkedIn: {targetUser?.linkedin}
                                  </p>
                                  {targetUser.website.length > 0 && (
                                    <p className="text-white">
                                      Website: {targetUser?.website}
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* Additional Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Skills:
                                  </h4>
                                  <p className="text-white">
                                    {investor?.skills?.join(' | ') || "No Skill info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Interested Field:
                                  </h4>
                                  <p className="text-white">
                                    {investor?.interested_fields?.join(' | ') || "No Intersting field info"}
                                  </p>
                                </div>
                              </div>

                              {/* Employment and Experience Details */}
                              <div className="flex flex-wrap mb-6">
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Current Employment Type:
                                  </h4>
                                  <p className="text-white">
                                    {student?.current_employment_status
                                      ? "Employed"
                                      : "Unemployed"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Experience:
                                  </h4>
                                  <p className="text-white">
                                    {investor?.experience  || "No Experience info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  {targetUser.email && (
                                    <div className="mb-6">
                                      <h4 className="font-bold text-lg text-white">
                                        Age: {age(targetUser?.birth_year)}
                                      </h4>
                                    </div>
                                  )}
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Companies:
                                  </h4>
                                  <p className="text-white">
                                    {investor?.company_names?.join(' | ') || "No Company Info"}
                                  </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                  <h4 className="font-bold text-lg text-white">
                                    Total Invesment:
                                  </h4>
                                  <p className="text-white">
                                    {investor.total_investments || "No invesment Info"}
                                  </p>
                                </div>
                              </div>

                              {/* Email */}
                              <div className="mb-6">
                                <h4 className="font-bold text-lg text-white">
                                  Email:
                                </h4>
                                <p className="text-white">
                                  <a href={`mailto:${targetUser.email}`}>
                                    {targetUser.email}
                                  </a>
                                </p>
                              </div>

                              {/* Modal Dialog Action */}
                              <div className="flex justify-end">
                                <button
                                  className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-[#c141f8] hover:to-[#5b55fd] text-white font-bold hover:text-white"
                                  onClick={() =>
                                    document
                                      .getElementById(
                                        `investor`
                                      )
                                      .close()
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </dialog>


                        {/* Investor Modal (wants to fund)*/}







                      </div>
                      {/* When clicked this button, show a dialog that shows the details of their profile*/}
                      <a href={`mailto:${noti.from}`}>
                        <button className="btn btn-sm text-sm bg-pink-950 text-white font-thin">
                          Reach Out
                        </button>
                      </a>
                      <button
                        className="text-xl"
                        onClick={() => handleDelete(noti._id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {/* redirect to notification tab */}
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="flex gap-1 text-black justify-center items-center text-base">
              <p>Hi, {user?.email.split("@")[0]}</p>
              <span className="text-xl">
                <FiSettings />
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {/* redirect to profile for setting you can remove it */}
            <li>
              <Link to={`/info/${portal}`}>
                <button className="flex flex-row justify-center items-center gap-2">
                  <BiEditAlt /> Edit Info
                </button>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <a
                  href="/login"
                  className="flex flex-row justify-center items-center gap-2"
                >
                  <BiLogOut /> Logout
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  portal: PropTypes.string,
};
