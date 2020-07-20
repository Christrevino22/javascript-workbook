'use strict'

console.log("loading api.js file");

generateRobot("player1");
generateRobot("player2");

class Player {
  cards = [];
  id = null;
  divId = null;

  constructor(id, divId){
    this.id = Math.random();
    this.divId = divId;
  }
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

function dealCards(){
  fetch("https://deckofcards")
}
function generateRobot(divId){
  fetch("https://robohash.org/" + player.id).then(function(response){
  console.log("processing the robot fetch response", response);
  return response.blob()
  
}).then(function(blob){
  console.log("processing the robot fetch payload", blob)
  insertRobot(divId, blob);
});
}


function insertRobot(divId, blob){
  console.log("Attempting to add the img to the div", divId)
  let img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  let playerDiv = document.getElementById(divId);
  playerDiv.appendChild(img);
}
