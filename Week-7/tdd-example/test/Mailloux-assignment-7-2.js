/*
============================================
; Title:  Exercise 7.2
; File Name: Mailloux-assignment-7.2.js
; Author: Laurie Mailloux
; Date:   April 1 2020
; Description: TDD in action
;===========================================
*/

var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

function getFruits(str){
    return str.split(',');
}
module.exports = getFruits;

