// src/components/AdminLogin.tsx
import React, { useState } from 'react';
import { checkCredentials } from '../utils/checkAdmin';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const auth  = useAuth()
  const  navigate = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const isAuthenticated = checkCredentials(username, password);

    if (isAuthenticated) {
      alert('Login successful!');
      auth.login("secret")
      navigate('/dashboard'); 

      
      // Add logic to redirect user or set session
    } else {
      setError('Invalid username or password');
    }
  };

//   if (useAuth) {
        
//   }

  return (
    <div className="bg-white shadow-lg shadow-neutral-800 rounded-lg p-5 w-4/5 text-center">
      <h2 className="mb-5 font-bold">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-fit mb-3 self-start p-2 bg-blue-500 text-white rounded-md text-lg cursor-pointer hover:bg-blue-400"
        >
          Login
        </button>
            <h1>want to register click <Link className=' text-blue-600 underline' to='/'>here</Link> </h1>
      </form>
    </div>
  );
};

export default AdminLogin;
