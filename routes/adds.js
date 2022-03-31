var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET adds.

// router.get("/advertisements", async function (req, res, next) {
//   let sql = "SELECT * FROM advertisements";

//   try {
//     let results = await db(sql);
//     let adds = results.data;
//     console.log("adds", adds);
//     res.send(adds);
//   } catch (err) {
//     next(err);
//   }
// });

// //Post a new Add to the Data Base
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

// //edit an add in the database
// router.put("/advertisements/:id", async function (req, res, next) {
//   let addId = req.params.id;
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

//   try {
//     let result = await db(`SELECT * FROM advertisements WHERE id = ${addId}`);
//     if (result.data.length === 0) {
//       res.status(400).send({ error: "add not Found" });
//     } else {
//       sql = `UPDATE advertisements
//     SET businessesId = '${businessesId}', adtype='${adtype}', adtitle= '${adtitle}', adfield='${adfield}', joblocation = '${joblocation}', wage= '${wage}', datelisted= '${datelisted}', adclosingdate='${adclosingdate}', contractstartdate = '${contractstartdate}', contractlength='${contractlength}', adinfo='${adinfo}', adfilled=${adfilled}'
//     WHERE id = ${addId}`;
//       await db(sql);
//       let result = await db("SELECT * FROM advertisements");
//       let add = result.data;
//       res.send(add);
//     }
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// //DELETE A BUSINESS
// router.delete("/advertisements/:id", async function (req, res, next) {
//   let addId = req.params.id;

//   try {
//     let result = await db(`SELECT * FROM advertisements WHERE id = ${addId}`);
//     if (result.data.length === 0) {
//       res.status(404).send({ error: "advertisements not found" });
//     } else {
//       await db(`DELETE FROM advertisements WHERE id = ${addId}`);
//       let result = await db(`SELECT * FROM advertisements`);
//       let adds = result.data;
//       res.send(adds);
//     }
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

module.exports = router;
