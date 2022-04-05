import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Router from "./Router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

import Api from "./Helpers/Api";
import Local from "./Helpers/Local";

function App() {
  // const [userActive, setUserActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  // const [junctionTable, setJunctionTable] = useState([]);
  const [adds, setAdds] = useState([]);
  const [user, setUser] = useState(Local.getUser());
  // const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  let navigate = useNavigate;

  useEffect(() => {
    getBusinesses();
    getAdvertisements();
    console.log("user", user);
    // getJunct();
  }, []);

  async function doLogin(email, pword) {
    let response = await Api.loginUser(email, pword);
    // console.log("DATA", response.data.businesses.email);
    // console.log("email", email, "password", pword);
    if (response.ok) {
      Local.saveUserInfo(response.data.token, response.data.businesses);
      setUser(response.data.businesses);
      setLoginErrorMsg("");
      navigate("/membersonly"); //used to navigate between sessions
    } else {
      setLoginErrorMsg("Login failed");
    }
  }

  async function getBusinesses() {
    let response = await Api.getBus();
    if (response.ok) {
      setBusinesses(response.data);
    } else {
      console.log(`Business Error: ${response.error}`);
    }
  }
  async function getAdvertisements() {
    let response = await Api.getAdds();
    if (response.ok) {
      setAdds(response.data);
    } else {
      console.log(`Adds Error: ${response.error}`);
    }
  }

  async function addAdd(newAdd) {
    console.log("async function for new add", newAdd);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdd),
    };
    try {
      let response = await fetch("/advertisements", options);
      if (response.ok) {
        let data = await response.json();
        setAdds(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  async function addBus(newBus) {
    console.log("async function for new business", newBus);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBus),
    };
    try {
      let response = await fetch("/businesses", options);
      if (response.ok) {
        let data = await response.json();
        setAdds(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  function doLogout() {
    Local.removeUserInfo();
    setUser(null);
    navigate("/");
  }

  // function userLoggedIn(user) {
  //   setUserActive(user);
  //   console.log("userpasslogin", user);
  // }
  // function userLoggedOut(user) {
  //   setUserActive(user);
  //   console.log("userpasslogout", user);
  // }

  return (
    <div className="App">
      <h5 className="farm-jobs-header">Farm Jobs</h5>
      <BrowserRouter>
        <Navbar
          // userActive={userActive}
          user={user}
          logoutCb={doLogout}
        />

        <Router
          adds={adds}
          businesses={businesses}
          // userLoggedIn={userLoggedIn}
          // userLoggedOut={userLoggedOut}
          AddCb={addAdd}
          BusinessCb={addBus}
          loginCb={(u, p) => doLogin(u, p)}
          loginError={loginErrorMsg}
          doLoginCb={doLogin}
        />
      </BrowserRouter>
      {/* {businesses} */}
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10"></div>
      </div>
    </div>
  );
}

export default App;
