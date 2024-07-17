import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// import { roles } from '../services/authService';

import logo from '../../public/logo/BizConnect.png'; // Replace with your actual logo file path
import { Link } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState(roles.ENTREPRENEUR);
  // const { login } = useAuth();
  // const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    // login(username, password, role);
    // if (role === roles.ENTREPRENEUR) history.push('/entrepreneur/profile');
    // else if (role === roles.INVESTOR) history.push('/investor/profile');
    // else if (role === roles.STUDENT) history.push('/student/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-900 p-8 my-7 rounded-lg shadow-md w-full max-w-xl">
        <Link to='/'><img src={logo} alt="Website Logo" className="h-16 mb-4 mx-auto" /></Link> {/* Logo */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-300">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-gray-800 p-2  border rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-800 border rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Role</label>
            <select
              // value={role}
              // onChange={(e) => setRole(e.target.value)}
              className="w-full bg-gray-800 p-2 border rounded focus:outline-none focus:border-purple-500"
            >
              {/* <option value={roles.ENTREPRENEUR}>Entrepreneur</option>
              <option value={roles.INVESTOR}>Investor</option>
              <option value={roles.STUDENT}>Student</option> */}
              <option >Entrepreneur</option>
              <option >Investor</option>
              <option >Student</option>
            </select>
          </div>
          {/* Submit Button */}
          <button type="submit" className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
