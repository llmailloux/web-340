/*
============================================
; Title:  Mailloux-assignment-3.2.js
; Author: Laurie Mailloux
; Date:   March 7, 2020
; Description: demonstrates the use of morgan logging
;===========================================
*/


//Requires the Express module
//Requires http module
//requires use of path for view model
//sets logger as using morgan
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//sets the app keyword to a new express application
var app = express();

//establishes directory for 'views'
//sets EJS as the view Engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//tells the application to use morgan as the logger
app.use(logger('dev'));

app.get('/', function(req, res){
res.render('index', {
    message: 'Welcome to Laurie Maillouxs Morgan logger Example'
});
});

//Starts the server on port 8080
http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port %s', 3000);
});