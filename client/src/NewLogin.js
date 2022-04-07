import "./App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewLogin(props) {
  const loginError = props.loginError;
  // const navigate = useNavigate();
  const initialLogState = {
    email: "",
    pword: "",
  };
  // useEffect(() => {
  //   loggedIn();
  // }, []);

  // const [newLogin, setNewLogin] = useState(initialLogState);
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "pword":
        setPword(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("email", email, "password", pword);
    props.loginCb(email, pword);
    // loggedIn();
    // console.log("newBus", newLogin);
  }

  // function handleInputChange(e) {
  //   let { name, value } = e.target;
  //   setNewLogin((newLogin) => ({ ...newLogin, [name]: value }));
  // }
  // function loggedIn() {
  //   if (props.userLoggedIn) {
  //     navigate("/");
  //   }
  // }

  return (
    <div className="NewLogin">
      <form onSubmit={handleSubmit}>
        <h1>Login to Farm Jobs</h1>

        {props.loginError && (
          <div className="alert alert-danger">{props.loginError}</div>
        )}

        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-4 col-md-4">
            {/* <div className="form-group"> */}
            <label htmlFor="email">
              <span>User Email:</span>
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              value={email}
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-4 col-md-4">
            {/* <div className="form-group"> */}
            <label htmlFor="pword">
              <span>User Password:</span>
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="pword"
              aria-describedby="pword"
              name="pword"
              value={pword}
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            // style={{ backgroundColor: "darkolivegreen" }}
          >
            Login
          </button>
        </div>
      </form>
      {/* <button
        type="submit"
        className="btn btn-primary"
        // style={{ backgroundColor: "darkolivegreen" }}
      >
        Sign Up
      </button> */}
    </div>
  );
}

export default NewLogin;
