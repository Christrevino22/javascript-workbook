'use strict'

console.log("inside my main.js file");
//1.display the current time and date
let myDate = new Date();

console.log("The current date is", myDate);
//2.gets the span from page/document
    //let mySpan = document.getElementById("theTime");
//3.change the inner text of the span says
    //mySpan.innerText = myDate.toString();
    //console.log()
//.4
  let mySpan = document.getElementById("theTime");
   mySpan/addEventListener('click', function(){
  mySpan.innerText = myDate.toString();
  })



//5.start point//



