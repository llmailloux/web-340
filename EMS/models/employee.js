/*
============================================
; Title: Mailloux-assignment-7.4.js
; Author: Laurie Mailloux
; Date: April 1 2020
; Description: EMS Mongoose Schema and Model development
;===========================================
*/

//start program

//required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//define the employeeSchema

var employeeSchema = new Schema({
   firstName: String,
   lastName: String

});

//define the employee model

var Employee = mongoose.model("Employee",employeeSchema);

//expose the employee to calling files

module.exports = Employee;

//end
