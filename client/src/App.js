import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Router from "./Router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import Api from "./Helpers/Api";
import Local from "./Helpers/Local";

function App() {
  // const [userActive, setUserActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  // const [junctionTable, setJunctionTable] = useState([]);
  const [adds, setAdds] = useState([]);
  const [user, setUser] = useState(Local.getUser());
  const [usersAdd, setUsersAdd] = useState([]);
  // const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState();

  const navigate = useNavigate;
  console.log(navigate);

  function loggedin() {
    if (Local.getUser.length != 0) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }
  console.log("userloggedin", userLoggedIn);

  useEffect(() => {
    getBusinesses();
    getAdvertisements();
    loggedin();
    // getJunct();
  }, []);

  async function doLogin(email, pword) {
    let response = await Api.loginUser(email, pword);
    // console.log("DATA", response.data.businesses.email);
    // console.log("email", email, "password", pword);
    console.log("responsenotok", response);
    if (response.ok) {
      console.log("responseok", response.data);
      Local.saveUserInfo(response.data.token, response.data.user);
      navigate("/");
      setUser(response.data.user);
      setLoginErrorMsg("");
      setUserLoggedIn(true);
      // setUsersAdd(
      //   adds.find((add) => add.businessesId === response.data.businesses.id)
      // );
      //navigate("/businesses/:id"); //used to navigate between sessions
    } else {
      setLoginErrorMsg("Login failed");
    }
  }
  console.log("usercheck", user);

  async function getBusinesses() {
    let response = await Api.getBus();
    console.log("response.data", response);
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
      let response = await ("/businesses", options);
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
    setUserLoggedIn(false);
  }

  // function userLoggedIn(user) {
  //   setUserActive(user);
  //   console.log("userpasslogin", user);
  // }
  // function userLoggedOut(user) {
  //   setUserActive(user);
  //   console.log("userpasslogout", user);
  // }
  function updateBusDataCb() {}
  return (
    <div className="App">
      <div className="logo">
        <a>
          <img className="windmill" src="images/windmill.png" />
        </a>
        <h5 className="farm-jobs-header">Farm Jobs</h5>
        <h4>Connecting Producers and Employees</h4>
      </div>
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
          user={user}
          usersAdd={usersAdd}
          updateBusDataCb={updateBusDataCb}
          userLoggedIn={userLoggedIn}
        />
      </BrowserRouter>
      {/* {businesses} */}
    </div>
  );
}

export default App;
