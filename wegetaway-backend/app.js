var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var db = require('./routes/Database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listMenuRouter = require('./routes/listMenu');
var addTripRouter = require('./routes/AddTrip');
var getTripRouter = require('./routes/GetTrips');
var getSingleTripRouter = require('./routes/GetSingleTrip');
var getUserRouter = require('./routes/GetUser');
var addFriendRouter = require('./routes/AddFriend');
var dropTablesRouter = require('./routes/dropTables');
var getUsersFriendsRouter = require('./routes/GetUsersFriends');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.init();
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listMenu', listMenuRouter);
app.use('/addTrip', addTripRouter);
app.use('/getTrips', getTripRouter);
app.use('/getSingleTrip', getSingleTripRouter);
app.use('/getUser', getUserRouter);
app.use('/addUser', addFriendRouter);
app.use('/dropTables', dropTablesRouter);
app.use('/getUsersFriends', getUsersFriendsRouter);


module.exports = app;
