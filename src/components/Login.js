import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from "react-bootstrap/Alert";
import { Alert } from "antd";

import axios from "axios";
import "./Login.css";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     if (localStorage.getItem("userToken")) {
//       this.props.history.push("/");
//     }

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//       username: "",
//       password: "",
//       error: "",
//     };
//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value,
//       error: "",
//     });
//   }

//   onChangePassword(e) {
//     this.setState({
//       password: e.target.value,
//       error: "",
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     let data = {
//       username: this.state.username,
//       password: this.state.password,
//     };

//     axios
//       .post("https://noon-ecommerce.herokuapp.com/api/auth/login", data)

//       .then((res) => {
//         console.log("tttttttttttttttt", res);
//         localStorage.setItem("userToken", res.data.accessToken);
//         localStorage.setItem("userId", res.data._id);
//         // axios.defaults.headers.common = { Authorization: res.data.accessToken };
//         console.log("prropsssss", this.props);
//         if (localStorage.length) this.props.history.push("/");
//       })

//       .catch((err) => {
//         console.log("errrrrrrrrrr", err);
//         // this.setState({
//         //   error: err.response.data.message,
//         // });
//       });
//   }

//   renderError() {
//     return this.state.error ? <blockquote>{this.state.error}</blockquote> : "";
//   }

//   render() {

//   }
// }

// export default Login;

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [isHidden, setIsHidden] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log("wwwwwwwwwwwwwwwwwwwww");
      navigate("/");
    }
  });

  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  // }

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
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
      password,
    };

    axios
      .post(process.env.REACT_APP_API_URL + "/api/auth/login", data)

      .then((res) => {
        console.log("tttttttttttttttt", res);
        localStorage.setItem("userToken", res.data.accessToken);
        localStorage.setItem("userId", res.data._id);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("isLoggedIn", "true");

        // axios.defaults.headers.common = { Authorization: res.data.accessToken };
        // console.log("prropsssss", props);
        navigate("/", { replace: true });
      })

      .catch((err) => {
        console.log("errrrrrrrrrr", err);
        setError("Wrong Credentials!");
      });
  };

  const renderError = () => {
    // return error ? <blockquote>{error}</blockquote> : "";
    return error ? (
      <Alert
        className="fw-bold text-danger"
        message="Wrong Credentials!"
        description="wrong username or password"
        type="error"
        closable
        showIcon
      />
    ) : (
      ""
    );
  };
  return (
    <div
      className="mydiv text-center"
      style={{
        backgroundImage: `url(process.env.REACT_APP_API_URL+"/images/backGround.svg")`,
      }}
    >
      <main className="form-auth">
        <form onSubmit={onSubmit}>
          <img
            className="mb-5"
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt=""
          />
          <h4 className="fw-normal">Welcome back!</h4>
          <h3 className="fw-bold">Sign in to continue</h3>
          <p>
            Don’t have an account?{" "}
            <Link className="text-primary text-decoration-none" to="/register">
              Sign up
            </Link>
          </p>

          <div className="form-floating mt-5">
            <input
              type="text"
              value={username}
              onChange={onChangeUsername}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="text-muted">
              Username
            </label>
          </div>
          <div className="form-floating mt-2">
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" className="text-muted">
              Password
            </label>
          </div>
          {renderError()}
          {/* <p>
            <a href="./reset.html" className="text-decoration-none">
              Forgot your password?{" "}
            </a>
          </p> */}

          <button
            className="w-100 btn btn-lg btn-primary fs-6 fw-bold"
            type="submit"
          >
            SIGN IN
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
