var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var trip = {item: null};
    var conn;
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through GetTrips")
        conn.query("USE we_getaway;", function (err, result) {
            if (err) throw err;
            console.log("Using we_getaway");

        });
        conn.query(`SELECT * FROM trips WHERE id=${req.query.id}`, function (err, result) {
            console.log(result);
            if (err) throw err;
            const row = result[0];
            trip.item = {
                id: row.id,
                image: row.image,
                name: row.name,
                date: row.date,
                body: row.body
            };
            res.send(trip);
        });
    })
})
;

module.exports = router;