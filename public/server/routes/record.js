const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   email: req.body.email,
   message: req.body.message,
 };
 db_connect.collection("message").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

 
module.exports = recordRoutes;