var mysql = require('mysql');

var conn;
function init() {
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    conn.connect(function(err) {
       if (err) throw err;
       console.log("Connected!");
       conn.query("CREATE DATABASE IF NOT EXISTS we_getaway;", function (err, result) {
           if (err) throw err;
           console.log("Database created");
       });
       // use database
       conn.query("USE we_getaway;", function (err, result) {
           if (err) throw err;
           console.log("Using we_getaway");
       })
        // create trips table with an optional image, name, optional date, and empty body
       conn.query("CREATE TABLE IF NOT EXISTS trips (" +
           "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
           "image VARCHAR(100) DEFAULT 'defaultImage'," +
           "name VARCHAR(30) NOT NULL," +
           "date VARCHAR(100)," +
           "body VARCHAR(400)" +
           ");", function (err, result) {
           if (err) throw err;
           console.log("Trips table created");
       })
        //create users table with a name and an optional image
        conn.query("CREATE TABLE IF NOT EXISTS users (" +
            "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
            "image VARCHAR(100) DEFAULT 'defaultImage'," +
            "name VARCHAR(30) NOT NULL" +
            ");", function (err, result) {
            if (err) throw err;
            console.log("Users table created");
        })
        // create users_trips table to show the relationship between users
        // and trips, with non optional userID and tripId
        // this table is added to everytime a trip is created and when
        // the users associated with a trip is changed
        conn.query("CREATE TABLE IF NOT EXISTS users_trips (" +
            "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
            "tripID INT(6) NOT NULL," +
            "userID INT(6) NOT NULL" +
            ");", function (err, result) {
            if (err) throw err;
            console.log("Users_trips table created");
        })
        // create a user to user relationship table to show "friend connections
        conn.query(
            "CREATE TABLE IF NOT EXISTS friends" +
            "(" +
            "id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY," +
            "userOneID INT(6) NOT NULL," +
            "userTwoID INT(6) NOT NULL" +
            ");", function (err) {
                if (err) throw err;
                console.log("friends table created");
            }

        )
    });
}

function getDB() {
    return conn;
}

module.exports = {
    init,
    getDB
};