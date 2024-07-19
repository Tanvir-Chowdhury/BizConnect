import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/logo/BizConnect.png'; 
import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Login = () => {
  const { user, logInWithEmailPass} = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const getRole = async()=>{
    try {
      const response = await axiosPublic.get(`/users/role/${user?.email}`);
      return response.data;
    } catch (error) {
      setError("Error getting credentilas");
      return null
    }
  }

  const getData = async(role)=>{
    try {
      const response = await axiosPublic.get(`/data/${role}/${user?.email}`);
      return response.data;
    } catch (error) {
      return null
    }
  }
  

  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    const email = e.target.email.value
    const pass = e.target.password.value
    
    logInWithEmailPass(email, pass)
        .then(() => {
          setError(false);
          setLoading(false)
          const role = getRole() 

          if (role !== null){
            const data = getData(role)
            if (data === null){
              navigate(`/info/${role}`)
            }
            else{
              if(role==='student'){
                navigate('/student')
            }
              if(role==='investor'){
                navigate('/investor')
            }
              if(role==='entrepreneur'){
                navigate('/entrepreneur')
            }
            }
          }
          
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false)
        });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <Link to='/'><img src={logo} alt="Website Logo" className="h-16 mb-4 mx-auto" /></Link> {/* Logo */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            {/* Username */}
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                name='email'
                className="bg-transparent focus:outline-none ml-2 text-white"
              />
            </div>
            {/* Password */}
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <input
                type="password"
                placeholder="Password"
                name='password'
                className="bg-transparent focus:outline-none ml-2 text-white"
              />
            </div>
          </div>
          {error && <div className='w-full flex justify-center items-center text-center text-sm text-red-500'>{error} <br /> Please try again</div>}
          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md mt-4 flex justify-center items-center">
              {loading? (<span className="loading loading-ball loading-md"></span>):"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
