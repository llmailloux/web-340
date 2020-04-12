/*
===============================================================================
; Title:  app.js
; Author: Laurie Mailloux
; Date:   March 19 2020
; Description: Employees
;==============================================================================
*/

//start program
//requires
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

var Employee = require("./models/employee");

var csrfProtection = csrf({ cookie: true});

var mongoDB = "mongodb+srv://Jazmyn:crazy6kids@buwebdev-cluster-1-2bwgd.mongodb.net/test"

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connestion error:"));
db.once("open", function(){
  console.log("Application  connected to Atlas MongoDB instance");
  });

  var app = express();

  app.use(logger("short"));
app.use(express.static(__dirname + "/public"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//employee array
var employee = new Employee ({
    name: 'Jazmyn'
    last: 'Fish'
},

//routes
app.get("/", function(request, response){
    response.render("index", {
        title: "Home page"
    });
});

  app.get("/list", function (request, response) {
    response.render("list", {
      title: "Employee List",
     
    });
  });
  
   app.get("/new", function (request, response) {
    response.render("new", {
      title: "Add New Employee"
    });
  });

  app.post("/process", function (req, res) {
    console.log(req.body.txtName);
    res.redirect("/");
  });
  
  
 //create server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

