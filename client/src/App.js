import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

import Api from "./Api";

function App() {
  const [userActive, setUserActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    getBusinesses();
    getAdvertisements();
  }, []);

  async function getBusinesses() {
    let response = await Api.getBus();
    if (response.ok) {
      console.log("businesses", response.data);
      setBusinesses(response.data);
    } else {
      console.log(`Business Error: ${response.error}`);
    }
  }
  async function getAdvertisements() {
    let response = await Api.getAdds();
    if (response.ok) {
      console.log("adds", response.data);
      setAdds(response.data);
    } else {
      console.log(`Adds Error: ${response.error}`);
    }
  }

  function userLoggedIn(user) {
    setUserActive(user);
    console.log("userpasslogin", user);
  }
  function userLoggedOut(user) {
    setUserActive(user);
    console.log("userpasslogout", user);
  }

  console.log("USERACTIVE?", userActive);
  return (
    <div className="App">
      <h1>Farm Jobs</h1>
      <BrowserRouter>
        <Navbar userActive={userActive} />
        <Router
          adds={adds}
          businesses={businesses}
          userLoggedIn={userLoggedIn}
          userLoggedOut={userLoggedOut}
        />
      </BrowserRouter>
      {/* {businesses} */}
    </div>
  );
}

export default App;
