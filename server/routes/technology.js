var express = require('express');
var router = express.Router();
const data = require('../dataSet/technology.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.json(data);
});

module.exports = router;
