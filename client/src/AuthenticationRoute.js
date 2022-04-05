import React from "react";
import { Route, useNavigate, Redirect } from "react-router-dom";
import Local from "./Helpers/Local";

function AuthenticatedRoute(props) {
  // Redirect to /login if anonymous user
  let userId = Local.getUserId();
  if (!userId) {
    // return <Navigate to="/login" />;
    console.log("false", userId);
  } else {
    console.log("id", userId);
  }

  // Render <Route> containing child component(s)
  return (
    // <Route exact path={props.path}>
    //   {props.children}
    // </Route>
    <div>
      <Route path="/membersonly" element />
    </div>
  );
}

export default AuthenticatedRoute;
