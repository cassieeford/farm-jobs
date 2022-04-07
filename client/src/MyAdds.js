import "./App.css";
import MyAddData from "./MyAddData";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyAdds(props) {
  // user={props.user} adds={props.adds}
  // const [add, setAdd] = useState(
  //   props.adds.find((add) => add.businessesId == props.user.id)
  // );

  // const compid = props.user.id;
  // console.log("compid", compid);
  // console.log("adds for my adds", add);

  // function adds(compid) {
  // let addsToShow = ;
  // console.log("addsToShow");
  // return addsToShow;
  // }
  // function addfilter(compid) {
  //   let add = props.adds.filter((add) => add.businessesId === compid);
  //   setAdd(add);
  // }

  // let id = props.businesses.id;
  // let filteredArray = props.adds.filter((i) =>
  //   props.adds.includes(props.businesses.id)
  // );

  // console.log("adds", props.adds);
  // let userId = usersAdd.filter((add) => add.bussinessId === id);

  // console.log("useraddinMyAdd", props.businesses.id);
  console.log("id", props.user.id);
  console.log("adds", props.adds);
  let data = props.adds.filter(
    (add) => Number(add.businessesId) === Number(props.user.id)
  );
  console.log("data", data);
  let a = data[0];
  return (
    <div className="MyAdds">
      <div className="linkback">
        <h2>
          <Link to={`/businesses/:id`}>Back to your profile</Link>
        </h2>
      </div>
      <h1>My Advertisements</h1>
      {data.length === 0 ? (
        <div>No Advertisements</div>
      ) : (
        <div className="offset-md-4 col-md-4">
          <div className=" card mb-3" key={a.id}>
            <div className="card-body">
              <h5 className="card-title">{a.adtitle}</h5>
              <hr></hr>
              {/* <h6 className="card-subtitle mb-2">{a.joblocation}</h6> */}

              <h6 className="card-subtitle mb-2 text-muted">{a.adfield}</h6>

              <h6 className="card-subtitle mb-2 text-muted">
                Contract Length: {a.contractlength}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Ad Closing Date: {a.adclosingdate}{" "}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Contract Start Date: {a.contractstartdate}{" "}
              </h6>
              <hr></hr>
              <br></br>
              <p className="card-text">{a.adinfo}</p>
              <hr></hr>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
}

export default MyAdds;
