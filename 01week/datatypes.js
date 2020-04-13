'use strict'
// .1write a javascript program to display date and time
let now = new Date();
console.log("the current date and time, now");

//.2, 3 converting a string to a number and so on
const theNumber = 5;
const theString = theNumber.toString();

console.log("string is", theNumber.toString());
console.log("the number is", theNumber);

//.4 creating a boolean
let trueNumber = 50;
 let falseNumber = 40;

   console.log (typeof trueNumber <= falseNumber);
// //.5 writing a program the add two things together. For some reason it works in repl.it but not here??
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
alert(a + b);
 
// //.6 write a program than runs when two things are
let x = 42;
let y = 31;
 console.log(typeof x);
 console.log(typeof y);
 
 let addBoth = (x, y) => {
   if (x < y && y > 0) {
     return (x - y)
   }
 else {
      return 'this will be False'
 }}
 addBoth(x, y);

//.7 Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (input3, input4) => {

  let a = document.getElementById("input3").value.trim().toLowerCase();
  let b = document.getElementById("input4").value.trim().toLowerCase();

  console.log(a);
  console.log(b);


  if (a == "null" || a == "nan" || a == "undefined" || a == "false" || a == "" || a == '' || a == "0" || a == "-0") {
    a = null;
  }
  
  if (b == "null" || b == "nan" || b == "undefined" || b == "false" || b == "" || b == '' || b == "0" || b == "-0") {
    b = null;
  }


  console.log(a);
  console.log(b);

  console.log(typeof a);
  console.log(typeof b);






//8.
const bothFalse = (input5, input6) => {

  let a = document.getElementById("input5").value.trim().toLowerCase();
  let b = document.getElementById("input6").value.trim().toLowerCase();

  console.log(a);
  console.log(b);


  if (a == "null" || a == "nan" || a == "undefined" || a == "false" || a == "" || a == '' || a == "0" || a == "-0") {
    a = null;
  }
  
  if (b == "null" || b == "nan" || b == "undefined" || b == "false" || b == "" || b == '' || b == "0" || b == "-0") {
    b = null;
  }

  console.log(a); 
  console.log(b);

  console.log(typeof a);
  console.log(typeof b);


//.9

