var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var path = require('path');
// var home = require('./routes/api/home')(app, path);
var login = require('./routes/api/auth')(app);

app.listen(3000, () => {
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();

    console.log('Server has been started at : ' + n + ':' + m);
});