/*
============================================
; Title:  Mailloux-assignment-3.3.js
; Author: Laurie Mailloux
; Date:   March 7, 2020
; Description: demonstrates use of advanced routing
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

app.get('/:productId', function(req, res){
    var productId = parseInt(req.params.productId, 10);

    res.render('index', {
        productId: productId
    });
});

//Starts the server on port 8080
http.createServer(app).listen(3001, function(){
    console.log('Application started and listen on port %s', 3001);
    });