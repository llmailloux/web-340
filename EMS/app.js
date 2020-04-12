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


  var csrfProtection = csrf({ cookie: true});

  var app = express();

  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");
  
  app.use(logger("short"));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(csrfProtection);
  app.use(helmet.xssFilter());
  app.use(express.static(__dirname + "/public"));
  
  app.use(function (request, response, next) {
    let token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
  });
  
  app.get("/", function (request, response) {
    response.render("index", {
      title: "Home page"
    });
  });


//employee array
var employeeName = req.body.txtName;
console.log(employeeName);

var employee = new Employee ({
    name: employeeName
});

//routes
app.get("/", function(request, response){
    response.render("index", {
        title: "Home page"
    });
});

app.get("/list", function(req, res) {
  Employee.find({}, function(error, employees) {
     if (error) throw error;     
     res.render("list", {
         title: "Employee List",
         employees: employees
     });
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

