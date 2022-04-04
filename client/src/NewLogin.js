import "./App.css";
import React, { useState } from "react";

function NewLogin(props) {
  const initialLogState = {
    email: "",
    pword: "",
  };

  const [newLogin, setNewLogin] = useState(initialLogState);

  function handleSubmit(e) {
    e.preventDefault();
    // props.BusinessCb(newLogin);
    console.log("newBus", newLogin);
  }

  function handleInputChange(e) {
    let { name, value } = e.target;
    setNewLogin((newLogin) => ({ ...newLogin, [name]: value }));
  }

  return (
    <div className="NewLogin">
      <form onSubmit={handleSubmit}>
        <h1>Login to Farm Jobs</h1>

        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-4 col-md-4">
            {/* <div className="form-group"> */}
            <label for="email">
              <span>User Email:</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              value={newLogin.email}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-4 col-md-4">
            {/* <div className="form-group"> */}
            <label for="password">
              <span>User Password:</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="password"
              aria-describedby="password"
              name="password"
              value={newLogin.password}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
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
    </div>
  );
}

export default NewLogin;
