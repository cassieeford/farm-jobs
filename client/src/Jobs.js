import "./App.css";
import Map from "./Map";
import { useState, Link } from "react";
import CompanyPopUp from "./CompanyPopUp";

function Jobs(props) {
  function business(id) {
    let companies = props.businesses.filter((comp) => comp.id === id);
    console.log("COMP", companies);
    return companies;
  }

  return (
    <div className="Job Board">
      <hr></hr>
      <h1>Job Board</h1>

      <div className="Jobs">
        <div class="jobs-container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-5">
              <div className="job-cards">
                {props.adds.map((a) => (
                  // {let company = props.businesses.filter(comp => comp.id === a.businessesId)}
                  <CompanyPopUp
                    key={a.id}
                    a={a}
                    businesses={business(a.businessesId)}
                  />
                ))}
              </div>
              ;
            </div>
            <div class="col col-lg-7 md-auto">
              <Map adds={props.adds} businesses={props.businesses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;