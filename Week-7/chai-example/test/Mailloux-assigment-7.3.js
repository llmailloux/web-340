/*
============================================
; Title:  Exercise 7.3
; File Name: Mailloux-assignment-7.3.js
; Author: Laurie Mailloux
; Date:   April 1 2020
; Description: Mocha Chai
;===========================================
*/

var fruits = require("../Mailloux-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){

     it("should return an array of fruits", function(){

     var f =fruits('Apple,Orange,Mango');
     
     assert(Array.isArray(f));
     
     });
});