import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import Contractors from "./Contractors";
import Leasing from "./Leasing";
import SignUp from "./SignUp";
import ProfileDetails from "./ProfileDetails";
import PostNewAdd from "./PostNewAdd";
import NewLogin from "./NewLogin";
import AuthenticatedRoute from "./AuthenticationRoute";
import MembersOnlyView from "./MembersOnlyView";
import UserProfile from "./UserProfile";
import ProfileView from "./ProfileView";
import MyAdds from "./MyAdds";

function Router(props) {
  let usersAdd = props.usersAdd;
  console.log("useradinRouter", usersAdd);
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contractors" element={<Contractors />} />
        <Route
          path="/jobs"
          element={<Jobs adds={props.adds} businesses={props.businesses} />}
        />
        <Route path="/leasing" element={<Leasing />} />
        <Route
          path="/login"
          element={
            <NewLogin
              userLoggedIn={props.userLoggedIn}
              userLoggedOut={props.userLoggedOut}
              BusinessCb={props.BusinessCb}
              loginCb={(u, p) => props.loginCb(u, p)}
              loginError={props.loginError}
              doLoginCb={props.doLoginCb}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp BusinessCb={props.BusinessCb} />}
        />
        {/* <AuthenticatedRoute> */}
        <Route
          path="/businesses/:id"
          element={<ProfileView user={props.user} />}
        />

        <Route
          path="/profiledetails"
          element={
            <ProfileDetails
              user={props.user}
              updateBusDataCb={props.updateBusDataCb}
            />
          }
        />

        <Route path="/members" element={<MembersOnlyView />} />
        <Route
          path="/newadd"
          element={<PostNewAdd AddCb={props.AddCb} user={props.user} />}
        />
        <Route
          path="/myadds"
          element={
            <MyAdds
              user={props.user}
              adds={props.adds}
              usersAdd={props.usersAdd}
            />
          }
        />
        {/* <Route path="/newadd" element={<PostNewAdd user={props.user} />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
