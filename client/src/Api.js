class Api {
  //get businesses from mySql database
  static async getBus() {
    let response;
    try {
      response = await fetch("./businesses");
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

  // static async addAdvertisement(newAdd) {
  //   let options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newAdd),
  //   };

  //   let response;
  //   try {
  //     response = await fetch("/advertisements", options);
  //     if (response.ok) {
  //       response.data = await response.json();
  //     } else {
  //       response.error = `Error ${response.status}: ${response.statusText}`;
  //     }
  //   } catch (err) {
  //     response = { ok: false, error: err.message };
  //   }

  //   return response;
  // }

  // static async getJunction() {
  //   let response;
  //   try {
  //     response = await fetch("./junction");
  //     if (response.ok) {
  //       response.data = await response.json();
  //     } else {
  //       response.error = `Error ${response.status}: ${response.statusText}`;
  //     }
  //   } catch (err) {
  //     response = { ok: false, error: err.message };
  //   }
  //   return response;
  // }
}
export default Api;
