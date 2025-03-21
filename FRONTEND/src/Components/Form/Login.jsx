import React, { useState } from 'react';
 import {useLottie} from "lottie-react";
import loading from '../../assets/loading.json'


import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  });

  const options = {
    animationData: loading,
    loop: true
  };
  const { View } = useLottie(options);


  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Error handler
  const handleError = (message) => {
    toast.error(message);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo ;
    console.log(loginInfo)

    if (!email || !password) {
      handleError('Username, email, and password are required');
      return;
    }

    try {
      const url = 'http://localhost:5001/auth/login';
      const response = await axios.post(url, loginInfo);

      if (response?.status === 201) {
        toast.success('Signup successful!');
        navigate('/home');
      } else {
        handleError('Login failed');
      }
    } catch (error) {
      handleError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
          <span>
            Don't Have an Account? <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
      {View}
    </>
  );
};

export default Login;
