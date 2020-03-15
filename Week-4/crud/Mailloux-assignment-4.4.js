/*
============================================
; Title: Mailloux-assignment.js
; Author: Professor Krasso
; Date:   March 15 2020
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

// start program
// declarations
var express = require("express");
var http = require("http");

var app = express();

// requests
// GET request 
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});
// PUT request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});
// POST request 
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});
// DELETE request 
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});
// start node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
//end program