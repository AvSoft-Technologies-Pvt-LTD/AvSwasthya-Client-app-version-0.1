import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../context-api/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(credentials)).unwrap();
      navigate('/dashboard');
    } catch (err) {
      console.error("Login failed", err);
      setCredentials({email:'',password:''});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-cyan-600">AV Swasthya</h2>
        <p className="text-center text-gray-600 font-normal ">Your trusted partner in seamless healthcare.</p>

        {loading && <p className="text-gray-500 text-center">Authenticating...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5 my-12">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={credentials.email}
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none transition duration-200" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            value={credentials.password}
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none transition duration-200" 
            required 
          />
          {/* <div className="text-right">
            <a href="/forgot-password" className="text-teal-600 text-sm hover:underline">Forgot Password?</a>
          </div> */}
          <button 
            type="submit" 
            onClick={handleSubmit}
            className="w-full p-3 my-5 bg-cyan-600 text-white rounded-3xl font-semibold hover:bg-cyan-700 transition duration-300" 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-10 text-gray-600 text-sm">
          New to AV Swasthya? <a href="/register" className="text-cyan-600 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
