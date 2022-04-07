import "./App.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Api from "./Helpers/Api";
import ProfileNavbar from "./ProfileNavbar";
// import Router from "./Router";
// import { BrowserRouter, Link } from "react-router-dom";
// import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
// import MembersOnlyView from "./MembersOnlyView";
import { Browser } from "leaflet";
import PostNewAdd from "./PostNewAdd";

function ProfileView(props) {
  console.log("USER Profile View", props.user);
  return (
    <div className="ProfileView">
      <h1>Your Profile</h1>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <ProfileNavbar />
          </div>

          <div class="col-8">
            <h2>
              Business Name:{} {props.user.name}
            </h2>
            <h2>Email: {props.user.email}</h2>
            <h2>Business Details: {props.user.companytext}</h2>
            <h2>Industry: {props.user.companytype}</h2>
            <h2>Contact Name: {props.user.contactname}</h2>
            <h2>Contact Number: {props.user.contactnum}</h2>
            <h2>Contact Email: {props.user.contactemail}</h2>
            <h2>Street Address: {props.user.streetadd}</h2>
            <h2>Town: {props.user.town}</h2>
            <h2>Postcode: {props.user.postcode}</h2>
            <h2>
              Would you like to be listed on the contractor's page?:{" "}
              {props.user.listascontractor}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
