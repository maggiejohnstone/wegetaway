var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var friends = {items: []};
    var conn;
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through GetUsersFriends")
        conn.query("USE we_getaway;", function (err, result) {
            if (err) throw err;
            console.log("Using we_getaway");

        });
        conn.query(`SELECT * FROM users WHERE id=
            (SELECT userTwoID 
            FROM friends 
            WHERE id=${req.query.id});`
            , function (err, result) {
            console.log(result);
            if (err) throw err;
            result.forEach(row => {
                friends.items.push({
                    id: row.id,
                    image: row.image,
                    name: row.name
                })
            });
            res.send(friends);
        });
    })
})
;

module.exports = router;