'use strict';
// assert libary is used for testing
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}



/** 
This function takes in start Stack and end Stack,and moves the top piece
*from the corresponding starting stack to the corresponding ending stack
* @param {*} startStack the name of the starting stack to move the piece from
* @param {*} endStack the name of the ending stack where the moved piece should land
*
*/
  
function movePiece(startStack, endStack) {
  // Your code here
  stacks.b.push('X')

}

/**
 * This function takes in the startStack name  and endStack name
 * and returns true only if the move is legal and valid
 * otherwise it return false
 * @param {*} startStack 
 * @param {*} endStack 
 */

function isLegal(startStack, endStack) {
  // Your code here
  

}
/**
 * This function returns true, if the board is in a "winning state"
 * winning state means : you restacked on either stacks b or c, biggest to smallest
 * 
 */
function checkForWin() {         
  // Your code here

}


 /**
  * This function should take in 2 inputs, the start stack and end stack and process that turn for the player
  * @param {*} startStack the stack they want to move from 
  * @param {*} endStack  the stack they want to move too
  * check to see if move is legal first, if move is legal "move piece", then ckeck to see if it wins print WIN
  * 
  */
function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
