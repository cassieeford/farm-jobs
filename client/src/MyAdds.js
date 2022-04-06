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
  let usersAdd = props.usersAdd;
  console.log("useradd", usersAdd);
  return (
    <div className="MyAdds">
      <div className="linkback">
        <h2>
          <Link to={`/businesses/9`}>Back to your profile</Link>
        </h2>
      </div>
      <h1>My Advertisements</h1>
      <h1>{usersAdd.adtitle}</h1>
      {/* {addfilter(props.user.id)} */}
      {/* {add.map((a) => {
        <MyAddData a={a} key={a.id} />;
      })} */}

      <div></div>
    </div>
  );
}

export default MyAdds;
