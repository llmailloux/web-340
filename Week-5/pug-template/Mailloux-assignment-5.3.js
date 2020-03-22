/*
============================================
; Title:  Mailloux-assignment-5.3
; Author: Laurie Mailloux
; Date:   March 22 2020
; Description:Pug Templates
;===========================================
*/

//start program
//require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set ('view engine', 'pug');

//route
app.get('/', function(req, res){
    res.render('index', {
        message: 'Strive not to be a success, but rather to be of value. -Albert Einstein' 
    });
});

//create
http.createServer(app).listen(8000, function(){
    console.log('Application started and listening on port 8000');
});

//end program