var express = require('express');
var router = express.Router();
var db = require('./Database');
var mysql = require('mysql');




/* POST new menu items */
router.post('/', function(req, res,) {
    var conn;
    var table;
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    /*format input data to send to database*/
    console.log(req.body.name);
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through AddTrip")
        conn.query("USE we_getaway;", function (err, result) {
            if (err) throw err;
            console.log("Using we_getaway");
        });
        conn.query(`INSERT INTO trips (name, date) \
        VALUES (
            "${req.body.name}",
            "${req.body.date}"
        )`, function (err, result) {
            if (err) throw err;
        });
        // conn.query(`SELECT max(id) FROM trips;`
        //     , function (err, result) {
        //     if (err) throw err;
        //     table = result;
        //     console.log(`result is ${JSON.stringify(result)}`);
        // });
        conn.query(`INSERT INTO users_trips (userID, tripID)
        VALUES ((SELECT id FROM users WHERE name="${req.body.user}"), (SELECT MAX(id) FROM trips));`, function (err, result) {
            if (err) throw err;
            console.log(`received result from insert ${JSON.stringify(result)}`);
        });
        // conn.query(`INSERT INTO users_trips (userID, tripID)
        // VALUES (${req.body.user}, (SELECT MAX(id) FROM trips));`, function (err, result) {
        //     if (err) throw err;
        //     console.log(`received result from insert ${JSON.stringify(result)}`);
        // });
    })
    /*put body.id and body.name*/


    res.send("trip added to trip table");
});

module.exports = router;