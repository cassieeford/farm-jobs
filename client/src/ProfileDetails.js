import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileDetails(props) {
  const initialBusState = {
    name: "",
    companytext: "",
    companytype: "", //"CONTRACTOR", "PRODUCER"
    contactname: "",
    contactnum: "",
    contactemail: "",
    streetadd: "",
    town: "",
    postcode: "",
    ad_id: "",
    listascontractor: "",
  };

  const [newBus, setNewBus] = useState(initialBusState);

  function handleSubmit(e) {
    e.preventDefault();
    props.BusinessCb(newBus);
    // setNewAdd(initialState);
    console.log("newBus", newBus);
  }

  function handleInputChange(e) {
    let { name, value } = e.target;
    setNewBus((newBus) => ({ ...newBus, [name]: value }));
  }

  return (
    <div className="PostNewAdd">
      <div className="linkback">
        <h2>
          <Link to={`/businesses/9`}>Back to your profile</Link>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Build your Farm Jobs Profile</h1>

        <div className="row mt-6">
          {/* <div className="offset-md-2 row mt-10"> */}
          <div className="offset-md-2 col-md-5">
            {/* <div className="form-group"> */}
            <label htmlFor="name">
              <span>Company/Profile Name:</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
              value={newBus.name}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-3">
            {/* <div className="form-group"> */}
            <label htmlFor="companytype">
              <span>Industry</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="companytype"
              aria-describedby="companytype"
              name="companytype"
              value={newBus.companytype}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-6">
          <div className="offset-md-2 col-md-8">
            <label htmlFor="companytext">
              <span>Company Details or Profile Information:</span>
            </label>
            <input
              defaultValue={"i.e. Horse Farrier with 15 years experience"}
              type="text"
              className="form-control"
              id="companytext"
              aria-describedby="companytext"
              name="companytext"
              value={newBus.companytext}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        {/* </div> */}
        <div className="row mt-10">
          <div className="offset-md-2 col-md-5">
            {/* <div className="form-group"> */}
            <label htmlFor="contactname">
              <span>Contact Name</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="contactname"
              aria-describedby="contactname"
              name="contactname"
              value={newBus.contactname}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-3">
            {/* <div className="form-group"> */}
            <label htmlFor="contactnum">
              <span>Contact Number</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="contactnum"
              aria-describedby="contactnum"
              name="contactnum"
              value={newBus.contactnum}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-10">
          <div className="offset-md-2 col-md-8">
            {/* <div className="form-group"> */}
            <label htmlFor="contactemail">
              <span>Contact Email</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="contactemail"
              aria-describedby="contactemail"
              name="offset-md-2 contactemail"
              value={newBus.contactemail}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="row mt-10">
          <div className="offset-md-2 col-md-8">
            <label htmlFor="streetadd">
              <span>Street Address</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="streetadd"
              aria-describedby="streetadd"
              name="streetadd"
              value={newBus.streetadd}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="row mt-10">
          <div className="offset-md-2 col-md-5">
            <label htmlFor="town">
              <span>Town</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="town"
              aria-describedby="town"
              name="town"
              value={newBus.town}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-3">
            {/* <div className="form-group"> */}
            <label htmlFor="postcode">
              <span>Postcode</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="postcode"
              aria-describedby="postcode"
              name="postcode"
              value={newBus.postcode}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row mt-10">
          <div className="offset-md-2 col-md-8 ">
            <label htmlFor="listascontractor" className="form-inline">
              <span>
                Are you a contractor and would like to list your profile as an
                Advertisement{" "}
              </span>
            </label>
            <select
              defaultValue={"Please write a sentence or two about your company"}
              className="form-control"
              id="listascontractor"
              name="listascontractor"
              value={newBus.listascontractor}
              style={{ cursor: "pointer" }}
              onChange={(e) => handleInputChange(e)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            // style={{ backgroundColor: "darkolivegreen" }}
          >
            Save Your Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
