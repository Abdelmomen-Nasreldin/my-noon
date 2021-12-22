import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";
const Register = () => {
  let navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log("wwwwwwwwwwwwwwwwwwwww");
      navigate("/");
    }
  });

  const onChangeName = (e) => {
    setName(e.target.value);
    setError("");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      username,
      email,
      password,
    };

    axios
      .post(process.env.REACT_APP_API_URL + "/api/auth/register", data)
      .then((res) => {
        // localStorage.setItem("userToken", res.data.accessToken);
        // localStorage.setItem("userId", res.data._id);
        // navigate("/", { replace: true });
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login", { replace: true });
        // axios.defaults.headers.common = { Authorization: res.accessToken };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderError = () => {
    return error ? <blockquote>{error}</blockquote> : "";
  };
  return (
    <div
      className="mydiv text-center"
      style={{
        backgroundImage: `url(process.env.REACT_APP_API_URL+"/images/backGround.svg")`,
      }}
    >
      <main className="form-auth">
        {renderError()}
        <form onSubmit={onSubmit}>
          <img
            className="mb-4"
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt=""
          />
          <h3 className="fw-bold">Create a noon account</h3>
          <p>
            Already have an account?{" "}
            <Link className="text-primary text-decoration-none" to="/login">
              Sign in
            </Link>
          </p>

          <div className="form-floating mt-5">
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              className="form-control"
              id="floatingInput1"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput1" className="text-muted">
              Email
            </label>
          </div>
          <div className="form-floating mt-2">
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              className="form-control"
              id="floatingPassword1"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword1" className="text-muted">
              Password
            </label>
          </div>

          <div className="form-floating mt-2">
            <input
              type="text"
              value={username}
              onChange={onChangeName}
              className="form-control"
              id="floatingInput2"
              placeholder="Username"
            />
            <label htmlFor="floatingInput2" className="text-muted">
              Username
            </label>
          </div>

          <button
            className="mt-5 w-100 btn btn-lg btn-primary fs-6 fw-bold"
            type="submit"
          >
            CREAT AN ACCOUNT
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
