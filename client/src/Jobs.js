import "./App.css";
import Map from "./Map";
import { useState } from "react";

function Jobs(props) {
  // const [businessData, setBusinessesData] = useState();

  // function findBusiness(busId) {
  //   let companyAd = props.businesses.filter((bus) => bus.id === busId);
  //   console.log(companyAd);
  // setBusinessesData(companyAd);
  //   // return companyAd;
  // }
  // console.log(businessData);
  return (
    <div className="Jobs">
      <p>
        Job Filters. Animation to view full add or farmer is to enlarge box to
        full screen
      </p>
      <div class="jobs-container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-5">
            <h1>Job Search</h1>
            <div className="job-cards">
              {props.adds.map((a) => (
                <div class="card mb-3" key={a.id}>
                  <div class="card-body">
                    <h1>
                      {" "}
                      {
                        props.businesses.filter(
                          (bus) => bus.id === a.businessesId
                        ).name
                      }
                    </h1>
                    <h5 class="card-title">{a.adtitle}</h5>
                    <h6 class="card-subtitle mb-2">{a.joblocation}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">{a.adfield}</h6>

                    <h7 class="card-subtitle mb-2 text-muted">
                      Contract Length: {a.contractlength}
                    </h7>
                    <h7 class="card-subtitle mb-2 text-muted">
                      Ad Closing Date: {a.adclosingdate}
                    </h7>
                    <p class="card-text">{a.adinfo.substring(0, 50)}...</p>
                    <a href="#" class="card-link">
                      View Full Add
                    </a>

                    <a href="#" class="card-link">
                      View Company Profile
                      {/* {findBusiness(a.businessesId)} */}
                      {/* {businessData.name} */}
                    </a>
                  </div>
                </div>
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
  );
}

export default Jobs;
