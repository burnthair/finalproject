var express=require('express');
var app = express();

var bodyParser=require("body-parser");
var pg = require("pg");
var routes=require("./routes");

var port=process.env.PORT||5000;
var pool = require("./pg-connectionpool.js");

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true})); 
app.use("/api", routes.router);


app.listen(port, function () {
    console.log('App listening on port '+port);
});
