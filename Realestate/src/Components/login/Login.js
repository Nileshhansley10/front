import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        navigate.push("/home");
        console.log("Login successful");
      } else {
        console.error("Login error");
      }
    } catch (error) {
      console.error("Network error");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>Forgot Password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have an account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
