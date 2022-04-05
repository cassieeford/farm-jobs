import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import Contractors from "./Contractors";
import Leasing from "./Leasing";
import SignUp from "./SignUp";
import ProfileData from "./ProfileData";
import PostNewAdd from "./PostNewAdd";
import NewLogin from "./NewLogin";
import AuthenticatedRoute from "./AuthenticationRoute";
import MembersOnlyView from "./MembersOnlyView";
import UserProfile from "./UserProfile";
import ProfileView from "./ProfileView";

function Router(props) {
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
        <Route path="/userprofile/:id" element={<ProfileView />} />
        {/* </AuthenticatedRoute> */}
        {/* 
        <AuthenticatedRoute path="/membersonly" element>
          <MembersOnlyView />
        </AuthenticatedRoute> */}

        <Route path="/newadd" element={<PostNewAdd AddCb={props.AddCb} />} />
        {/* <Route path="/userprofile/:id" element={<ProfileData />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
