/*
============================================
; Title: Assignment 1.5 
; Author: Laurie Mailloux  
; Date:   February 22, 2020
; Description: hello world
;===========================================
*/
//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 1.5"));

//new line
console.log("");


//declare variable
var http = require("http");

function processRequest(req, res) {

var body = "Hello World We are the Maillouxs', family of 8!  Welcome to our Crazy World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
