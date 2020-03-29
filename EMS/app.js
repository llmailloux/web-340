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
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//app function
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//employee array
var employee = [{
    firstName: 'Jazmyn',
    lastName: 'Fish',
    email: 'jfish@fishing.com'
},
{ 
    firstName: 'Joshua',
    lastName: 'James',
    email: 'jjames@teball.com'
},
{   firstName: 'Jace',
    lastName: 'Jacob',
    email: 'jjacob@tunetv.net',
}
];

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
  
 //create server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

