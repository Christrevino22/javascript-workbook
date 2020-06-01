// 1. Write a JavaScript program to display the current day and time.
let rightNow = new Date();
console.log('Today is', rightNow);
// 2. Write a JavaScript program to convert a number to a string.
let num = 4;
console.log(num.toString());
// 3. Write a JavaScript program to convert a string to the number.
let str = '4';
let otherStr = parseInt(str);
console.log(otherStr);
// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// p0. Boolean
let boolean = true;
console.log(typeof boolean);
// p1. Null
let nully;
console.log(typeof nully);
// p2. Undefined
let undies;
console.log(typeof undies);
// p3. Number
console.log("this is part two using this varible again",typeof str)
// p4. NaN


// p5. String
let whatsThis = "Christopher Trevino";
console.log(typeof whatsThis);

// 6. Write a JavaScript program that adds 2 numbers together.
let x = 5;
let y = 15;
let total = x + y;
console.log(total);
// 7. Write a JavaScript program that runs only when 2 things are true.
function twoThingTrue() {
  if (x === 5 && y === 15) {
    return true;
    
  }

}
console.log(twoThingTrue())

// 8. Write a JavaScript program that runs when 1 of 2 things are true.
function oneOfTwo() {
  if (x === 5 || y === 10) {
    return true;
  } else {
    return "If this logs both came out as false"
  }
  
}
console.log(oneOfTwo())
// 9. Write a JavaScript program that runs when both things are not true.
function bothFalse(){
  if (x === 10 || y === 5) {
    return false
  }
}
console.log(bothFalse());