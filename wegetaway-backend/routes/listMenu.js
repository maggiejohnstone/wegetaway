var express = require('express');
var db = require('./Database');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const r = {
        items: [
            {
                id: 1,
                name: 'shoe',
                price: 42
            },
            {
                id: 2,
                name: 'bucket',
                price: 15
            }
        ]
    }
    res.send(r);
});

module.exports = router;
