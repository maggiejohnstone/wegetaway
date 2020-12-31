var express = require('express');
var router = express.Router();
var db = require('./Database');
var mysql = require('mysql');




/* POST new menu items */
router.post('/', function(req, res,) {
    var conn;
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    /*format input data to send to database*/
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through AddTrip")
        conn.query("USE we_getaway;", function (err, result) {
            if (err) throw err;
            console.log("Using we_getaway");
        });
        conn.query(`INSERT INTO friends (userOneID, userTwoID) \
        VALUES (
            (SELECT id FROM users WHERE name="${req.body.userOne}"), 
            (SELECT id FROM users WHERE name="${req.body.userTwo}")
        );`, function (err, result) {
            if (err) throw err;
        });
    })
    /*put body.id and body.name*/


    res.send("trip added to trip table");
});

module.exports = router;