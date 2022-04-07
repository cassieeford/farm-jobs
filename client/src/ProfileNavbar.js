import React from "react";

function ProfileNavbar() {
  return (
    <div className="profilenavbar">
      <div className="profile-nav">
        <nav class="navbar navbar-light bg-light">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              {/* <Link to="/profiledetails">Profile Details</Link> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profiledetails">
                {" "}
                Update Profile{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/myadds">
                {" "}
                My Advertisements{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/newadd">
                {" "}
                Post a New Advertisement{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default ProfileNavbar;
