var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const db = require("../model/helper");
const { ensureSameUser } = require("../middleware/guards");
const { ensureUserLoggedIn } = require("../middleware/guards");

//Post a new Business to the Data Base with encrypted password
router.post("/businesses", async function (req, res, next) {
  let {
    name,
    companytext,
    email,
    pword,
    companytype,
    contactname,
    contactnum,
    contactemail,
    streetadd,
    town,
    postcode,
    ad_id,
    listascontractor,
  } = req.body;
  let hashedPassword = await bcrypt.hash(pword, BCRYPT_WORK_FACTOR);
  let sql = `
  INSERT INTO businesses (name, companytext, email, pword, companytype, contactname, contactnum, contactemail, streetadd, town,  postcode, ad_id, listascontractor)
  VALUES ('${name}', '${companytext}', '${email}','${hashedPassword}','${companytype}', '${contactname}', '${contactnum}', '${contactemail}', '${streetadd}', '${town}', '${postcode}', ${ad_id}, '${listascontractor}')`;
  try {
    await db(sql);
    let result = await db("SELECT * FROM businesses");
    let business = result.data;
    res.status(201).send(business);
    res.send({ message: "Registration Successful" });
  } catch (err) {
    res.status(500).send({ error: err.message });
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  let { email, pword } = req.body;

  try {
    let results = await db(`SELECT * FROM businesses WHERE email = '${email}'`);
    if (results.data.length === 0) {
      // Username not found
      res.status(401).send({ error: "User not found" });
    } else {
      let businesses = results.data[0]; // the user's row/record from the DB
      let passwordsEqual = await bcrypt.compare(pword, businesses.pword);
      if (passwordsEqual) {
        // Passwords match
        let payload = { id: businesses.id };
        // Create token containing user ID
        let token = jwt.sign(payload, SECRET_KEY);
        // Also return user (without password)
        delete businesses.pword;

        res.send({
          message: "Login succeeded",
          token: token,
          user: businesses,
        });
      } else {
        // Passwords don't match
        res.status(401).send({ error: "Password and user do not match" });
      }
    }
  } catch (err) {
    next(err);
  }
});

// router.post("/login", async (req, res, next) => {
//   let { email, pword } = req.body;

//   try {
//     let results = await db(`SELECT * FROM businesses WHERE email = '${email}'`);
//     if (results.data.length === 0) {
//       // Username not found
//       res.status(401).send({ error: "Login failed" });
//     } else {
//       let businesses = results.data[0]; // the user's row/record from the DB
//       let passwordsEqual = await bcrypt.compare(pword, businesses.pword);
//       if (passwordsEqual) {
//         // Passwords match
//         let payload = { id: businesses.id };
//         // Create token containing user ID
//         let token = jwt.sign(payload, SECRET_KEY);
//         // Also return user (without password)
//         delete businesses.pword;
//         res.send({
//           message: "Login succeeded",
//           token: token,
//           businesses: businesses,
//         });
//       } else {
//         // Passwords don't match
//         res.status(401).send({ error: "Login failed" });
//       }
//     }
//   } catch (err) {
//     next(err);
//   }
// });

// router.get(
//   "businesses/:userId",
//   ensureSameUser,
//   async function (req, res, next) {
//     let { userId } = req.params;
//     let sql = "SELECT * FROM users WHERE id = " + userId;

//     try {
//       let results = await db(sql);
//       let user = results.data[0];
//       delete user.password; // don't return the password
//       res.send(user);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

router.get(
  "/membersonly",
  //ensureUserLoggedIn,
  function (req, res, next) {
    res.send({
      message: "Here is your Members Only content from the server...",
    });
  }
);

router.get(
  "/businesses/:id",
  // ensureSameUser,
  async function (req, res, next) {
    let { busId } = req.params;
    let sql = `SELECT * FROM businesses WHERE id = ${busId}`;
    try {
      let results = await db(sql);
      let businessSelected = results.data[0];
      delete businessSelected.password; //do not return password
      if (businessSelected.length === 0) {
        res.status(404).send({ error: "business not found" });
      } else {
        res.send(businessSelected);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);

module.exports = router;
