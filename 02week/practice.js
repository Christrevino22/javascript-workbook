'use strict'

let word = "elephant";
let vowels = "aeiou";



function firstVowel(word){
  //loops thru whatever word is chosen to get translated
  for(let i = 0; i < word.length; i++){
    //needed to find a way to go thru every individual letter
    let letter = word[i];
    //needed to create the answer. this tells us wether it has a vowel or not 
    let answer = vowels.includes(letter);
    //console.log(letter, " ", answer);
    console.log(i , " ", answer);
    if(answer === true){
      return i;
    }
  }
}

let position = firstVowel("christopher");
console.log("position of the first vowel", position);






// Pig Latin
//  1. find the first vowel
//  if the first letter is a vowel, then you add "yay" to the end
//  example: egg -> eggyay
//  if the first vowel is in the middle of the word ,
//  then you split the word , and swap the halves, and add yay to the end
//  fox -> f ox -> oxf -> oxfay
//  if the word does not have a vowel, you can make something up