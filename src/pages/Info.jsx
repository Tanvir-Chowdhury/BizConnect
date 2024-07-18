import { useParams } from "react-router-dom";
import logo from "../../public/logo/BizConnect.png";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { MdError } from "react-icons/md";

const Info = () => {
  const { role } = useParams();
  const arr = ["initial", "common-part", "uncommon-part", "final"];
  const [current, setCurrent] = useState(arr[0]);
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  //form datas
  const [commonData, setCommonData] = useState({
    birth_year: "",
    birth_day: "",
    birth_month: "",
    linkedin: "",
    website: "",
  });

  const [studentData, setStudentData] = useState({
    major: "",
    graduation_year: "",
    introduction: "",
    skills: [],
    interested_fields: [],
    experience: "",
    current_employment_status: false, //true or false
    highest_education_degree: "", //ssc, hsc, undergrad
    last_result: 0, //out of 4 float
    open_for_employment: true, //true or false
  });

  const [investorData, setInvestorData] = useState({
    interested_fields:[],
    skills:[],
    experience:"",
    introduction:"",
    total_investments:0,
    company_names:[],
    open_for_investments:true,
    open_for_mentorship:true,
  });

  

    const [entrepreneurData, setEntrepreneurData] = useState({
    industry: "",
    introduction: "",
    current_employment_status: false,
    job_title: "",
    skills: [],
    interested_fields: [],
    experience: "",
    total_fund_raised: "",
    company_names: [],
    open_for_partnership: true,
    }); 

    const hanldeSubmit = () => {
        setLoading(true);
        console.log(commonData);
        console.log(studentData);
        console.log(investorData);
        console.log(entrepreneurData);
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-900 p-8 my-7 rounded-lg shadow-md w-full max-w-xl">
        <img src={logo} alt="Website Logo" className="h-16 mb-4 mx-auto" />
        {/* Logo */}

        {current === "initial" && (
          <div className="w-full max-w-xl">
            <h2 className="text-xl font-thin mb-4 text-center text-gray-300">
              Welcome.
              <br />
              <br />
              We are glad to hear that you are {role === "student"
                ? "a"
                : "an"}{" "}
              {role}.<br />
              We have plenty lot to explore. <br />
              <br />
              <span className="text-2xl">
                <span className="font-medium">Tell us more about you</span> to
                get the best of this website
              </span>
            </h2>
            <button
              className="w-full flex justify-center items-center text-4xl text-white hover:translate-y-1"
              onClick={() => setCurrent(arr[1])}
            >
              <FaArrowRightLong />
            </button>
          </div>
        )}

        {current === "common-part" && (
          <div className="w-full max-w-xl">
            <div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-400">
                  When Ware you Born?
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-gray-800 p-2  border rounded focus:outline-none focus:border-purple-500 text-white"
                  required
                  defaultValue={`${commonData.birth_year}-${commonData.birth_month}-${commonData.birth_day}`}
                  onChange={(e) => {
                    const [year, month, date] = e.target.value.split("-");

                    setCommonData({
                      ...commonData,
                      birth_year: parseInt(year),
                      birth_day: date,
                      birth_month: month,
                    });
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-400">
                  Your Linkdin Url
                </label>
                <input
                  type="text"
                  name="linkdin"
                  className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                  defaultValue={commonData.linkedin}
                  required
                  onChange={(e) =>
                    setCommonData({ ...commonData, linkedin: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-400">
                  Your Personal Website (optional)
                </label>
                <input
                  type="text"
                  name="linkdin"
                  className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                  defaultValue={commonData.website}
                  onChange={(e) =>
                    setCommonData({ ...commonData, website: e.target.value })
                  }
                />
              </div>
              {error && <p className="text-red-500 w-full text-center font-thin flex justify-center items-center gap-2">{error}<MdError />
              </p>}
              <div className="flex flex-row justify-between items-center mt-6">
                <button
                  className=" flex justify-center items-center text-4xl text-white hover:translate-y-1"
                  onClick={() => setCurrent(arr[0])}
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  className=" flex justify-center items-center text-4xl text-white hover:translate-y-1"
                  onClick={() => {
                    if(commonData.birth_year && commonData.linkedin){
                        setError(null)
                      setCurrent(arr[2])
                    }
                    else{
                      setError("Please fill all the fields")
                    }
                }}
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        )}

        {current === "uncommon-part" && (
          <div className="w-full max-w-xl">
            <div>
              {role === "student" && <StudentForm/>}
                {role === "investor" && <InvestorForm/>}
                {role === "entrepreneur" && <EntrepreneurForm entrepreneurData={entrepreneurData} setEntrepreneurData={setEntrepreneurData} />}
              <div className="flex flex-row justify-between items-center mt-6 gap-28">
                <button
                  className=" flex justify-center items-center text-4xl text-white hover:translate-y-1"
                  onClick={() => setCurrent(arr[1])}
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  className=" flex justify-center items-center text-4xl text-white hover:translate-y-1"
                  onClick={() => setCurrent(arr[3])}
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        )}


{current === "final" && (
          <div className="w-full max-w-xl">
            <div>
            <h2 className="text-xl font-thin mb-4 text-center text-gray-300">
              Thanks for the valuable info.
              <br />
              It will help us personalize your experience.
              <br />
              <br />
              <span className="text-2xl font-medium">Go to Dashboard</span>
            </h2>
            
                <button
                  className="w-full flex justify-center items-center text-4xl text-white hover:translate-y-1"
                  onClick={hanldeSubmit}
                >
                    {loading ? "Loading..." :  <FaArrowRightLong />}
                 
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;


const StudentForm = () => {
    return (
        <div>
            Student
        </div>
    )
}

const InvestorForm = () => {
    return (
        <div>
            Investor
        </div>
    )
}

const EntrepreneurForm = ({entrepreneurData,setEntrepreneurData}) => {
    return (
        <div>
            <div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Industry</label>
                <input
                type="text"
                name='industry'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, industry: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Introduction</label>
                <textarea
                name='introduction'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, introduction: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Current Employment Status</label>
                <select
                name='current_employment_status'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, current_employment_status: e.target.value})}
                >
                <option value={true}>Employed</option>
                <option value={false}>Unemployed</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Job Title</label>
                <input
                type="text"
                name='job_title'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, job_title: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Skills</label>
                <input
                type="text"
                name='skills'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, skills: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Interested Fields</label>
                <input
                type="text"
                name='interested_fields'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, interested_fields: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Experience</label>
                <input
                type="text"
                name='experience'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, experience: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Total Fund Raised</label>
                <input
                type="text"
                name='total_fund_raised'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, total_fund_raised: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Company Names</label>
                <input
                type="text"
                name='company_names'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, company_names: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Open for Partnership</label>
                <select
                name='open_for_partnership'
                className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500 text-white"
                required
                onChange={(e) => setEntrepreneurData({...entrepreneurData, open_for_partnership: e.target.value})}
                >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                </select>
            </div>
            </div>
        </div>
    )
}

EntrepreneurForm.propTypes = {
    entrepreneurData: PropTypes.object,
    setEntrepreneurData: PropTypes.func,
  };