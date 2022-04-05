import "./App.css";
import React, { useState } from "react";

function PostNewAdd(props) {
  const initialState = {
    businessesId: 1,
    adtype: "", //"JOB", "CONTRACTOR", "LEASING"
    adtitle: "",
    adfield: "",
    joblocation: "",
    wage: "",
    datelisted: "",
    adclosingdate: "",
    contractstartdate: "",
    contractlength: "",
    adinfo: "",
    adfilled: "false",
  };

  const [newAdd, setNewAdd] = useState(initialState);
  console.log("initialAddState", newAdd);
  function handleSubmit(e) {
    e.preventDefault();
    props.AddCb(newAdd);
    setNewAdd(initialState);
    console.log("newAdd", newAdd);
  }

  function handleInputChange(e) {
    console.log(newAdd);
    let { name, value } = e.target;
    setNewAdd((newAdd) => ({ ...newAdd, [name]: value }));
  }

  return (
    <div className="PostNewAdd">
      <form onSubmit={handleSubmit}>
        <h1>post a new job advertisement</h1>

        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-2 col-md-5">
            {/* <div className="form-group"> */}
            <label htmlFor="adtitle">
              <span>Advertisement Details:</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="adtitle"
              aria-describedby="adtitle"
              name="adtitle"
              value={newAdd.adtitle}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
            {/* </div> */}
          </div>

          <div className="col-md-3">
            <label htmlFor="adtype">
              <span>Type of Advertisement</span>
            </label>
            <select
              className="form-control"
              id="adtype"
              name="adtype"
              value={newAdd.adtype}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            >
              <option>Job</option>
              <option>Contractor</option>
              <option>Leasing</option>
            </select>
          </div>
          {/* </div> */}
        </div>
        <div className="row mt-10">
          <div className="offset-md-2 col-md-3">
            {/* <div className="form-group"> */}
            <label htmlFor="adfield">
              <span>Advertisement Field</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="adfield"
              aria-describedby="adfield"
              name="adfield"
              value={newAdd.adfield}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-3">
            {/* <div className="form-group"> */}
            <label htmlFor="joblocation">
              <span>Location</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="joblocation"
              aria-describedby="joblocation"
              name="joblocation"
              value={newAdd.joblocation}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-2">
            {/* <div className="form-group"> */}
            <label htmlFor="wage">
              <span>$$$</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="wage"
              aria-describedby="wage"
              name="wage"
              value={newAdd.wage}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-10">
          <div className="offset-md-2 col-md-2">
            {/* <div className="form-group"> */}
            <label htmlFor="datelisted">
              <span>Date Listed</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="datelisted"
              aria-describedby="datelisted"
              name="datelisted"
              value={newAdd.datelisted}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-2">
            {/* <div className="form-group"> */}
            <label htmlFor="adclosingdate">
              <span>Add Closing Date</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="adclosingdate"
              aria-describedby="adclosingdate"
              name="adclosingdate"
              value={newAdd.adclosingdate}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-2">
            {/* <div className="form-group"> */}
            <label htmlFor="contractstartdate">
              <span>Start Date</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="contractstartdate"
              aria-describedby="contractstartdate"
              name="contractstartdate"
              value={newAdd.contractstartdate}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-2">
            {/* <div className="form-group"> */}
            <label htmlFor="contractlength">
              <span>Contract Length</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="contractlength"
              aria-describedby="contractlength"
              name="contractlength"
              value={newAdd.contractlength}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-10">
          <div className="offset-md-2 col-md-8">
            {/* <div className="form-group"> */}
            <label htmlFor="adinfo">
              <span>Advertisement Details:</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="adinfo"
              aria-describedby="adinfo"
              name="adinfo"
              value={newAdd.adinfo}
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
            Post Ad to Job Board
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostNewAdd;
