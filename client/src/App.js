import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

import Api from "./Api";

function App() {
  const [userActive, setUserActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  // const [junctionTable, setJunctionTable] = useState([]);
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    getBusinesses();
    getAdvertisements();
    // getJunct();
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

  // async function addAdd(newAdd) {
  //   let response = await Api.addAdvertisement(newAdd);
  //   if (response.ok) {
  //     setAdds(response.data);
  //   } else {
  //     console.log(`Error: ${response.error}`);
  //   }
  // }
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

  // async function getJunct() {
  //   let response = await Api.getJunction();
  //   if (response.ok) {
  //     console.log("junction", response.data);
  //     setJunctionTable(response.data);
  //   } else {
  //     console.log(`Adds Error: ${response.error}`);
  //   }
  // }

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
      <h5 className="farm-jobs-header">Farm Jobs</h5>
      <BrowserRouter>
        <Navbar userActive={userActive} />

        <Router
          adds={adds}
          businesses={businesses}
          userLoggedIn={userLoggedIn}
          userLoggedOut={userLoggedOut}
          AddCb={addAdd}
          BusinessCb={addBus}
        />
      </BrowserRouter>
      {/* {businesses} */}
      <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10"></div>
      </div>
    </div>
  );
}

export default App;
