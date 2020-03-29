/*
============================================
; Title:  Exercise 6.3
; File Name: Mailloux-assignment-6.3.js
; Author: Laurie Mailloux
; Date:   March 20 2020
; Description: Mongoose
;===========================================
*/
//start program
//require
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

//set mongoDB connection string
var mongoDB = 'mongodb+srv://Jazmyn:crazy6kids@buwebdev-cluster-1-2bwgd.mongodb.net/Mydata';

//connecting to mongoDB
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//setting success and error console.log
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function(){
    console.log('Application connected to mLab');
});

//set morgan logger
var app = express();
app.use(logger('dev'));

//create server
http.createServer(app).listen(5000, function (){
    console.log('Application started and listening on port 5000');
});