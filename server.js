var express=require('express');
var app = express();
var router = express.Router();
var bodyParser=require("body-parser");
var pg = require("pg");
var routes=require("./routes");

var port=process.env.PORT||5000;
//var pool = require("./pg-connectionpool");


//Handles parsing responses, used throughout server
//Middlware mounted, processed in order
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/vendor", express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use("/api", routes.router);

app.listen(port, function() {
    console.log('App listening on port ' + port);
});
