/*
============================================
; Title:  Mailloux-assignment-3.4.js
; Author: Laurie Mailloux
; Date:   March 7, 2020
; Description: demonstrates use of advanced routing, morgan logging, and EJS views
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
 app.use(logger('short'));

 //body of application

 //home handler
 app.get('/', function(request, response){
     response.render('index', {
         message: 'Home Page'
     });
 });

 //about handler
 app.get('/about', function(request, response){
     response.render('about', {
         message: 'About Page'
     });
 });

 //contact handler
 app.get('/contact', function(request, response){
     response.render('contact', {
         message: 'Contact Page'
     });
 });

 //products handler
 app.get('/products', function(request, response){
     response.render('products',{
         message: 'Products Page'
     });
 });

 //Starts the server on port 8080
 http.createServer(app).listen(8080, function(){
     console.log('Application started on port 8080');
      });
