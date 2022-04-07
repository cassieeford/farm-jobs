import Local from "./Local";

class Api {
  static async getContent(route) {
    // Prepare URL and options
    let url = route;
    let options = { method: "GET", headers: {} };

    // Add JWT token (if it exists) in case content is protected
    let token = Local.getToken();
    if (token) {
      options.headers["Authorization"] = "Bearer " + token;
    }

    // Fetch!
    let response;
    try {
      response = await fetch(url, options);
      if (response.ok) {
        response.data = await response.json();
      } else {
        response.error = `Error ${response.status}: ${response.statusText}`;
      }
    } catch (err) {
      response = { ok: false, error: err.message };
    }

    return response;
  }

  //login a user
  static async loginUser(email, pword) {
    // Prepare URL and options
    let url = "/login";
    let body = { email, pword };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    // Fetch!
    let response;
    try {
      response = await fetch(url, options);
      // console.log("response", response);
      if (response.ok) {
        response.data = await response.json();
      } else {
        response.error = `Error ${response.status}: ${response.statusText}`;
      }
    } catch (err) {
      response = { ok: false, error: err.message };
    }
    return response;
  }

  //get businesses from mySql database
  static async getBus() {
    let response;
    console.log("API.GetBus response", response);
    try {
      response = await fetch("./businesses");
      if (response.ok) {
        response.data = await response.json();
        console.log("API.GetBus response OK", response.data);
      } else {
        response.error = `Error ${response.status}: ${response.statusText}`;
      }
    } catch (err) {
      response = { ok: false, error: err.message };
    }
    return response;
  }

  static async getAdds() {
    let response;
    try {
      response = await fetch("./advertisements");
      if (response.ok) {
        response.data = await response.json();
      } else {
        response.error = `Error ${response.status}: ${response.statusText}`;
      }
    } catch (err) {
      response = { ok: false, error: err.message };
    }
    return response;
  }

  static async getBusinessId(busId) {
    let url = `/businesses/${busId}`;
    let options = { method: "GET", headers: {} };

    let token = Local.getToken();
    if (token) {
      options.headers["Authorization"] = "Bearer " + token;
    }

    let response;
    try {
      response = await fetch(url, options);
      if (response.ok) {
        response.data = await response.json;
      } else {
        response.error = `Error ${response.status}`;
      }
    } catch (err) {
      response = { ok: false, error: err.message };
    }
    return response;
  }
}

export default Api;
