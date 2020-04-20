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

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

let Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
