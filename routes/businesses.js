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

router.post("/advertisements", async (req, res) => {
  let {
    businessesId,
    adtype,
    adtitle,
    adfield,
    joblocation,
    wage,
    datelisted,
    adclosingdate,
    contractstartdate,
    contractlength,
    adinfo,
    adfilled,
  } = req.body;

  //statement that inserts info into iems table
  let sql = `
  INSERT INTO advertisements (businessesId, adtype, adtitle, adfield, joblocation, wage, datelisted, adclosingdate, contractstartdate,  contractlength, adinfo, adfilled)
  VALUES ('${businessesId}', '${adtype}', '${adtitle}','${adfield}','${joblocation}', '${wage}', '${datelisted}', '${adclosingdate}', '${contractstartdate}', '${contractlength}', '${adinfo}', '${adfilled}')`;

  try {
    //update items table
    await db(sql);
    //need this to get the item id that was created when updating the items table
    let adds = await db("SELECT * FROM advertisements");
    let advertisements = adds.data;
    if (advertisements.length) {
      res.send(advertisements);
    } else {
      res.status(404).res.send({ error: "Not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Post a new Add to the Data Base
// router.post("/advertisements", async function (req, res, next) {
//   let {
//     businessesId,
//     adtype,
//     adtitle,
//     adfield,
//     joblocation,
//     wage,
//     datelisted,
//     adclosingdate,
//     contractstartdate,
//     contractlength,
//     adinfo,
//     adfilled,
//   } = req.body;

//   let sql = `
//   INSERT INTO advertisements (businessesId, adtype, adtitle, adfield, joblocation, wage, datelisted, adclosingdate, contractstartdate,  contractlength, adinfo, adfilled)
//   VALUES ('${businessesId}', '${adtype}', '${adtitle}','${adfield}','${joblocation}', '${wage}', '${datelisted}', '${adclosingdate}', '${contractstartdate}', '${contractlength}', ${adinfo}, '${adfilled}')`;

//   try {
//     await db(sql);
//     let result = await db("SELECT * FROM advertisements");
//     let adds = result.data;
//     res.status(201).send(adds);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

//edit a business in the database
router.put("/businesses/:id", async function (req, res, next) {
  let busId = req.params.id;
  let {
    name,
    companytext,
    companytype,
    contactname,
    contactnum,
    contactemail,
    streetadd,
    town,
    postcode,
    listascontractor,
  } = req.body;

  try {
    let result = await db(`SELECT * FROM businesses WHERE id = ${busId}`);
    if (result.data.length === 0) {
      res.status(400).send({ error: "business not Found" });
    } else {
      sql = `UPDATE businesses
    SET name = '${name}', companytext='${companytext}', companytype = '${companytype}', contactname= '${contactname}', contactnum= '${contactnum}', contactemail='${contactemail}', streetadd = '${streetadd}', town='${town}', postcode='${postcode}', listascontractor='${listascontractor}'
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
