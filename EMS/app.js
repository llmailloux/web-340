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
  
  app.get('/view', function(request, response) {
    response.render('view', {
      title: 'View of Employees'
    });
  });

  const firstName = request.body.txtFirstName;
  const lastName = request.body.txtLastName;
  console.log(firstName + " " + lastName);

  let employee = new Employee({
    first: firstName,
    last: lastName,
  });

  employees.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + ' saved successfully!');
      res.redirect('/');
    }
  });
});
  
 //create server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
