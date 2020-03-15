/*
============================================
; Title: Mailloux-assignment.4.2.js
; Author: Laurie Mailloux
; Date:   March 15 2020
; Description: JSON API
;===========================================
*/
//start program 
//declarations
var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
//request
app.get('/customer/:id', function(req, res){

    var id = parseInt(req.params.id, 10);


    res.json({

        firstName: 'Bob',
        lastName: 'Builder',
        employeeId: id
    });
});
// start node server

        http.createServer(app).listen(3000, function(){
        console.log('Application started and listening on port 3000');
        });
//end program