/*
============================================
; Title:  Mailloux-assignment4.3.js
; Author: Laurie Mailloux
; Date:  March 15 2020
; Description: Status Codes
;===========================================
*/
//start program
//decloration
var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

//requests using status codes
//404 status code
app.get('/not-found', function(req, res) {

  res.status(404);

  res.json({
    error: 'Resource not found.'
  })
});
//200 status code
app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    message: 'Page loaded correctly.'
  })
});
//501 status code
app.get('/not-implemented', function(req, res) {
  res.status(501);

  res.json({
    error: 'Page not implemented'
  })
});
//call server
http.createServer(app).listen(3000, function() {
  console.log('Application started and listening on port 3000');
});
//end program
