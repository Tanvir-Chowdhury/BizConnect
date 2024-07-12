// pages/Login.js
import React, { useState } from 'eact';
import { useContext } from 'eact';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to authenticate user
    //...
    const user = { id: 1, role: 'investor' }; // Replace with API response
    login(user, user.role);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;