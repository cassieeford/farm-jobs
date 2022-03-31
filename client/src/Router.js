import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Jobs from "./Jobs";
import Contractors from "./Contractors";
import Leasing from "./Leasing";

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
            <Login
              userLoggedIn={props.userLoggedIn}
              userLoggedOut={props.userLoggedOut}
            />
          }
        />
        {/* <Route path="/user" element={<UserProfile />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
