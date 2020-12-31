
var mysql = require('mysql');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var conn;
  conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "satuMare2013!"
  });
  conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database through GetUser")
    conn.query("USE we_getaway;", function (err, result) {
      if (err) throw err;
      console.log("Using we_getaway");
    })
    conn.query("DELETE FROM trips;", function (err, result) {
      if (err) throw err;
      console.log("we_getaway deleted");
    });

  })
});

module.exports = router;
