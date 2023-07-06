import React, { useState } from "react";
import axios from "axios";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const navigate = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        username: name, // Change "name" to "username" to match the backend schema
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Registration successful");
        navigate.push("/sign-in"); // Redirect to the login page after successful registration
      } else {
        console.error("Registration error");
      }
    } catch (error) {
      console.error("Network error");
    }

    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />

              <button type="submit" className="primary-btn">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
