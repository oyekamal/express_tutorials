var express = require('express');
var things = require('./core/things.js');
var app = express();


app.get('/', function(req, res){
    res.send("get api here");
});


app.get("/hello", function(req, res){
    res.send({"messaga":"hellow"});
});

app.post("/hello", function(req, res){
    res.send({"messaga":"post"});
});


app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

app.use('/things', things);
app.listen(3000)