import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { roles } from '../services/authService';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(roles.ENTREPRENEUR);
  const { login } = useAuth();
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    login(username, password, role);
    if (role === roles.ENTREPRENEUR) history.push('/entrepreneur/profile');
    else if (role === roles.INVESTOR) history.push('/investor/profile');
    else if (role === roles.STUDENT) history.push('/student/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value={roles.ENTREPRENEUR}>Entrepreneur</option>
              <option value={roles.INVESTOR}>Investor</option>
              <option value={roles.STUDENT}>Student</option>
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
