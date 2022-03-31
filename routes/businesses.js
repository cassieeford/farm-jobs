var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Try /businesses" });
});

//GET businesses page.
router.get("/businesses", async function (req, res, next) {
  let sql = "SELECT * FROM businesses";

  try {
    let results = await db(sql);
    let business = results.data;
    console.log("adds", business);
    res.send(business);
  } catch (err) {
    next(err);
  }
});

router.get("/advertisements", async function (req, res, next) {
  let sql = "SELECT * FROM advertisements";

  try {
    let results = await db(sql);
    let adds = results.data;
    console.log("adds", adds);
    res.send(adds);
  } catch (err) {
    next(err);
  }
});

// router.get("/advertisements", async function (req, res, next) {
//   let sql = "SELECT * FROM advertisements";

//   try {
//     let results = await db(sql);
//     let adds = results.data;
//     res.send(adds);
//   } catch (err) {
//     next(err);
//   }
// });

//GET business by ID

router.get("/businesses/:id", async function (req, res, next) {
  let busId = req.params.id;
  try {
    let results = await db(`SELECT * FROM businesses WHERE id = ${busId}`);
    let businessSelected = results.data;
    if (businessSelected.length === 0) {
      res.status(404).send({ error: "business not found" });
    } else {
      res.send(businessSelected[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//Post a new Business to the Data Base
router.post("/businesses", async function (req, res, next) {
  let {
    name,
    companytext,
    email,
    pword,
    company,
    contactname,
    contactnum,
    contactemail,
    streetadd,
    town,
    postcode,
    ad_id,
    companytype,
  } = req.body;

  let sql = `
  INSERT INTO businesses (name, companytext, email, pword, company, contactname, contactnum, contactemail, streetadd, town,  postcode, ad_id, companytype)
  VALUES ('${name}', '${companytext}', '${email}','${pword}','${company}', '${contactname}', '${contactnum}', '${contactemail}', '${streetadd}', '${town}', '${postcode}', ${ad_id}, '${companytype}')`;

  try {
    await db(sql);
    let result = await db("SELECT * FROM businesses");
    let business = result.data;
    res.status(201).send(business);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//edit a business in the database
router.put("/businesses/:id", async function (req, res, next) {
  let busId = req.params.id;
  let {
    name,
    companytext,
    email,
    pword,
    company,
    contactname,
    contactnum,
    contactemail,
    streetadd,
    town,
    postcode,
    ad_id,
    companytype,
  } = req.body;

  try {
    let result = await db(`SELECT * FROM businesses WHERE id = ${busId}`);
    if (result.data.length === 0) {
      res.status(400).send({ error: "business not Found" });
    } else {
      sql = `UPDATE businesses
    SET name = '${name}', companytext='${companytext}', email= '${email}', pword='${pword}', company = '${company}', contactname= '${contactname}', contactnum= '${contactnum}', contactemail='${contactemail}', streetadd = '${streetadd}', town='${town}', postcode='${postcode}', ad_id=${ad_id}, companytype='${companytype}'
    WHERE id = ${busId}`;
      await db(sql);
      let result = await db("SELECT * FROM businesses");
      let business = result.data;
      res.send(business);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//DELETE A BUSINESS
router.delete("/businesses/:id", async function (req, res, next) {
  let busId = req.params.id;

  try {
    let result = await db(`SELECT * FROM businesses WHERE id = ${busId}`);
    if (result.data.length === 0) {
      res.status(404).send({ error: "business not found" });
    } else {
      await db(`DELETE FROM businesses WHERE id = ${busId}`);
      let result = await db(`SELECT * FROM businesses`);
      let business = result.data;
      res.send(business);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
