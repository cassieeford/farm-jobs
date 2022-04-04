import "./App.css";
import React, { useState } from "react";

function SignUp(props) {
  const initialBusState = {
    name: "",
    companytext: "",
    email: "",
    pword: "",
    companytype: "",
    contactname: "",
    contactnum: "",
    contactemail: "",
    streetadd: "",
    town: "",
    postcode: "",
    ad_id: 0,
    listascontractor: "",
  };

  const [newSignUp, setNewSignUp] = useState(initialBusState);

  function handleSubmit(e) {
    e.preventDefault();
    props.BusinessCb(newSignUp);
    // setNewAdd(initialState);
    console.log("newBus", newSignUp);
  }

  function handleInputChange(e) {
    let { name, value } = e.target;
    setNewSignUp((newSignUp) => ({ ...newSignUp, [name]: value }));
  }

  return (
    <div className="PostNewAdd">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up to Farm Jobs</h1>

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
              value={newSignUp.email}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-4 col-md-4">
            {/* <div className="form-group"> */}
            <label for="pword">
              <span>User Password:</span>
            </label>
            <input
              type="pword"
              className="form-control"
              id="pword"
              aria-describedby="pword"
              name="pword"
              value={newSignUp.pword}
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
