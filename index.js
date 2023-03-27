var express = require('express');
var bodyParser = require('body-parser');
var things = require('./core/things.js');
var app = express();

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send("get api here");
});


app.get("/hello", function (req, res) {
    res.send({ "messaga": "hellow" });
});

app.post("/hello", function (req, res) {
    res.send({ "messaga": "post" });
});


app.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});
//Middleware function to log request protocol
app.use(function (req, res, next) {
    console.log("A request Things start " + Date.now());
    next();
});
app.use('/things', things);
app.use('/things', function (req, res, next) {
    console.log("A request Things end -- " + Date.now());
    next();
});
app.listen(3000)