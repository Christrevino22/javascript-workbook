'use strict'
// the do while loop is still a little fuzzy to me.
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);

//console.log("this is my console logged result!", result);
// next i need to create an object

const sampleObject = {  
  firstName: "Jane",
  lastName:"Doe",
  birthDate: "Jan 5, 1925",
  gender: 'Female'
}
//defining property in chris
for (let property in sampleObject){
  //if property equals birthDate
  if (property === "birthDate"){
    //let the oddYear be the birthdate defined as a number as well as slice the end of the birthdate to return the year
    let oddYear = parseInt(sampleObject["birthDate"].slice(-4));
    //if the odd year isnt divisible by 2 then it would mean it is a odd number
    (oddYear % 2 !== 0)
    //console.log("this should display odd year", oddYear)
  }
  
}


/**
 * making an array of people
 */
let arrayOfPeople = [
 {  
  firstName: "Jane",
  lastName:"Doe",
  birthDate: "Jan 5, 1995",
  gender: 'Female'
},
 {  
  firstName: "Hitzel",
  lastName:"Betts",
  birthDate: "Aug 30, 1996",
  gender: 'Female'
},
{  
  firstName: "Cooper",
  lastName:"Trevino",
  birthDate: "March 5, 1930",
  gender: 'Male'
},
{  
  firstName: "Bonnie",
  lastName:"Trevino",
  birthDate: "Oct 9, 2013",
  gender: 'Female'
}];
//console.log(arrayOfPeople);

//need to use map to map over the array of persons and console.log information

arrayOfPeople.map(function(info){
  return info
})
//console.log(arrayOfPeople)
//using the filter method to get the males out only
let isMale = arrayOfPeople.filter(arrayOfPeople => arrayOfPeople.gender === "Male");
console.log(isMale);
//need to filter out the people born before 1990 
let stillGotTime = arrayOfPeople.filter(birthDate => birthDate["birthDate"].slice(-4) < "1990");
console.log(stillGotTime);


