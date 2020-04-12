/*
============================================
; Title:  Mailloux-assignment-5.2
; Author: Laurie Mailloux
; Date:   March 22 2020
; Description:EJS Templates
;===========================================
*/

//start program
//requires
var express = require("express");
var http = require("http");
var path = require("path");


var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//local composer array
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

//routes
app.get('/', function(req, res){
    res.render('index', {
        names: composers
    });
});

//create server
http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port 3000')
});
//end program