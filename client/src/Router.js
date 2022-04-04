import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Jobs from "./Jobs";
import Contractors from "./Contractors";
import Leasing from "./Leasing";
import SignUp from "./SignUp";
import ProfileData from "./ProfileData";
import PostNewAdd from "./PostNewAdd";
import NewLogin from "./NewLogin";

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
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp BusinessCb={props.BusinessCb} />}
        />
        <Route path="/newadd" element={<PostNewAdd AddCb={props.AddCb} />} />
        <Route path="/userprofile" element={<ProfileData />} />
      </Routes>
    </div>
  );
}

export default Router;
