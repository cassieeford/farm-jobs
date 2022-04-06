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
  // const [user, setUser] = useState(null);
  // const [errorMsg, setErrorMsg] = useState("");

  // let params = useParams();

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  // async function fetchProfile() {
  //   console.log("userId", params.id);
  //   let response = await Api.getBusinessId(params.id);
  //   if (response.ok) {
  //     console.log("response", response.data);
  //     setUser(response.data);
  //     setErrorMsg("");
  //   } else {
  //     setUser(null);
  //     setErrorMsg(response.error);
  //   }
  // }
  // if (errorMsg) {
  //   return <h2 style={{ color: "red" }}>{errorMsg}</h2>;
  // }

  // if (!user) {
  //   return <h2>Loading...</h2>;
  // }
  console.log("USER", props.user);
  return (
    <div className="ProfileView">
      <h1>Your Profile</h1>
      <div class="container">
        <div class="row">
          {/* <BrowserRouter> */}
          <div class="col-4">
            <ProfileNavbar />
            {/* <li class="nav-item">
              <a class="nav-link" href="/members">
                {" "}
                My Profile{" "}
              </a>
            </li> */}
            {/* <div className="profilenavigation"> */}
            {/* <nav> */}
            {/* <Link to="/members">Go to Home Page | </Link> */}
            {/* </nav> */}
            {/* </div> */}
          </div>

          <div class="col-8">
            Second Column
            {/* <BrowserRouter> */}
            {/* <Routes>
              <Route
                path="/members"
                element={<MembersOnlyView user={props.user} />}
              />
              <Route
                path="/newadd"
                element={<PostNewAdd user={props.user} />}
              />
            </Routes> */}
            {/* </BrowserRouter> */}
            {/* <ProfileRoutes /> */}
            {/* <h2>{props.user.name}</h2>
            <h2>{props.user.email}</h2>
            <h2>{props.user.postcode}</h2> */}
          </div>
          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
