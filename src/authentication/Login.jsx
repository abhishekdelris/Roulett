import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Logo from '../assets/img/logo.png';
import Casino from '../assets/img/casino-img.png';

function Login() {
  const [loginId, setLoginId] = useState('QHFUEQ');
  const [password, setPassword] = useState('12345678');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Start loading state
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append('Cookie', 'ci_session=5oie86ld2pfr1pr099esmsfkm446urbd');

    const formdata = new FormData();
    formdata.append('login_id', loginId);
    formdata.append('password', password);
    console.log("formdata",formdata);
    

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    try {
      const response = await fetch(
        'https://delristech-projects.in/roulette_web/index.php/api/Web_api/userLogin',
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg max-w-sm w-full text-center backgroud-img h-screen flex items-center justify-center">
        <div>
          {/* Logo and Title */}
          <div className="mb-6">
            <img src={Logo} alt="Khel Games" className="mx-auto mt-4 w-32 h-32" />
            <img src={Casino} alt="Casino Logo" className="mx-auto mt-4 w-32 h-32" />
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter User Id"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className={`bg-yellow-500 text-white font-bold py-2 px-4 rounded-md w-full mt-6 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
