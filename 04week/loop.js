/**
 * Use a do While loop to console.log numbers from 1 to 1000.
 * */ 
const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

const tieDyes = colors.map((color) => {
  return `tieDyed-${color}`;
});

console.log(tieDyes);

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);

console.log(result);
// expected result: "12345"
