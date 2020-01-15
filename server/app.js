var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var music = require('./routes/music');
var sports = require('./routes/sports');
var comedy = require('./routes/comedy');
var art = require('./routes/art');
var technology = require('./routes/technology');
var other = require('./routes/other');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/music', music);
app.use('/api/v1/sports', sports);
app.use('/api/v1/comedy', comedy);
app.use('/api/v1/art', art);
app.use('/api/v1/technology', technology);
app.use('/api/v1/other', other);

module.exports = app;
