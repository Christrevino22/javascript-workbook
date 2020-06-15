'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//this function will take in a word and returns the position of the first vowel
//if the word has no vowel, it return -1 
function firstVowel(word){
  let wordNew = word.toLowerCase().trim();
  let vowels = "aeiou";
  //loops thru whatever word is chosen to get translated
  for(let i = 0; i < word.length; i++){
    //needed to find a way to go thru every individual letter
    let letter = word[i];
    //needed to create the answer. this tells us wether it has a vowel or not 
    let answer = vowels.includes(letter);
    //console.log(letter, " ", answer);
    //console.log(i , " ", answer);
    //if our answer is = to true it would return our i.
    if(answer === true){
      return i;
    }//is this letter a vowel
  }
  //if you get to this point
  //what does it mean? is it done running the loop, and did not return
  //which means it did not find a vowel
      return -1;
} 

const pigLatin = (word)  => {

  // Your code here
 
  //set a empty string
  //set the first vowel into a variable
     let position = firstVowel(word);
     //console.log("position of the first vowel is", position)
    //felt like it should have worked
     if (firstVowel == true){
       word += "yay";
       return word;
     } else if (firstVowel === -1){
      let firstHalf = word.substring(0, position);
       word = word.substring(firstVowel, word.length);
       word = word + firstHalf;
       word += "ay";
       return word;

     }

     
}           



const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
