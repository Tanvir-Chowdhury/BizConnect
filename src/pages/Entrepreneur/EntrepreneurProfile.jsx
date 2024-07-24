import ProfilePicture from "../../components/ProfilePicture";
import { MdEmail, MdWork } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaIndustry, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { AiFillExperiment } from "react-icons/ai";

const entrepreneur = {
  email: "sa@gmail.com",
  industry: "Web Devlopement",
  introduction: "hey there I am entre",
  current_employment_status: true,
  job_title: "Web Devloper",
  skills: ["react", "mern", "communication", "js", "html","react", "mern", "communication", "js", "html","react", "mern", "communication", "js", "html"],
  interested_fields: ["webdev", "ml", "ai"],
  experience: "5 years at Caltech",
  total_fund_raised: 200,
  company_names: ["a", "b"],
  open_for_partnership: true,
  date: new Date().toISOString(),
};
const user = {
  name: "Ayon",
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
};
const EntrepreneurProfile = () => {
  return (
    <>
      <div className="p-4 min-h-[calc(100vh-4rem)] lg:ml-40 bg-gray-950 text-gray-300">
        <div className="container mx-auto pb-7">
          <h1 className="text-center text-4xl font-bold text-[#d4a1e9] py-7">
            {user?.name}'s Profile
          </h1>

          <div>
            <ProfilePicture gender={user?.gender} />
            <p className="mx-auto w-full flex justify-center items-center">
              @{user?.username}
            </p>
            <p className="mx-auto w-full flex justify-center items-center text-white">
              {entrepreneur?.introduction}
            </p>
            <p className="mx-auto w-full flex justify-center items-center text-white text-xl mt-2">
              <span className="border-white border-[1px] px-4 py-1 rounded-xl">Total Fund Raised: ${entrepreneur?.total_fund_raised}</span>
            </p>
            

            {/*Contact */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl text-[#d4a1e9] text-center mt-6">
                Contacts
              </h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center gap-6">
                  <p className="text-white flex justify-center items-center gap-1">
                    <MdEmail /> {user?.email}
                  </p>
                  <p className="text-white flex justify-center items-center gap-1">
                    <BiPhone />
                    {user?.phone}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                  <p className="text-white flex justify-center items-center gap-1">
                    <FaLinkedin />{" "}
                    {user?.linkedin === "" ? "No linkedin info" : user?.linkedin}
                  </p>
                  <p className="text-white flex justify-center items-center gap-1">
                    <CgWebsite />
                    {user?.website === "" ? "No website info" : user?.website}
                  </p>
                </div>
              </div>
            </div>
            {/*Info */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl text-[#d4a1e9] text-center mt-6">
                Info
              </h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center gap-6">
                  <p className="text-white flex justify-center items-center gap-1">
                    <FaIndustry/> {entrepreneur?.industry}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                  <p className="text-white flex justify-center items-center gap-1">
                    <MdWork/>{entrepreneur?.current_employment_status? `Working as  ${entrepreneur?.job_title}` : 'Unemployed'}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                  <p className="text-white flex justify-center items-center gap-1">
                    <AiFillExperiment/>{entrepreneur?.experience===''? `No Previous Expericence` : entrepreneur?.experience}
                  </p>
                </div>
              </div>
            </div>
            {/*Skills */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl text-[#d4a1e9] text-center mt-6">
                Skills
              </h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center gap-4 flex-wrap max-w-[80%] mx-auto">
                  {entrepreneur?.skills?.map((skill,idx)=>{
                    return <p key={idx} className="border-gray-300 border-[1px] bg-[#221236] px-4 rounded-2xl py-2 text-white">{skill}</p>
                  })}
                </div>
              </div>
            </div>
            {/*Intersted fields */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl text-[#d4a1e9] text-center mt-6">
                Intersted fields
              </h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center gap-4 flex-wrap max-w-[80%] mx-auto">
                  {entrepreneur?.interested_fields?.map((field,idx)=>{
                    return <p key={idx} className="border-gray-300 border-[1px] bg-[#221236] px-4 rounded-2xl py-2 text-white">{field}</p>
                  })}
                </div>
              </div>
            </div>
            {/*companies */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl text-[#d4a1e9] text-center mt-6">
                Companies
              </h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center gap-4 max-w-[80%] mx-auto">
                  {entrepreneur?.company_names?.map((company,idx)=>{
                    return <p key={idx} className="border-gray-300 border-[1px] bg-[#221236] px-4 rounded-2xl py-2 text-white">{company}</p>
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EntrepreneurProfile;
