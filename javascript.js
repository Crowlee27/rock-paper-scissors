/*create rock paper scissors
steps of problem solving
ask if you want to play rock paper scissors
make the choices for rock paper scissors
ask the player to pick rock paper or scissors
randomize rock paper scissors for the computer
explain which hand beats what
player won/player lost
ask if you want to play agin
reset game
run again
*/ 






function getComputerChoice() {
  const randomHand = Math.floor(Math.random() * 3);
  if (randomHand === 0) {
    return "Rock";
  } else if (randomHand === 1) {
    return "Paper";
  } else if (randomHand === 2) {
    return "Scissor";
  }
}

function computerSelection() {
  return getComputerChoice();
}

function playerSelection() {
  let myHand = prompt("Please pick a hand");
  let myHand2 = myHand.charAt(0).toUpperCase() + myHand.slice(1).toLowerCase();
  if (myHand2 === "Rock") {
    return "Rock";
  } else if (myHand2 === "Paper") {
    return "Paper";
  } else if (myHand2 === "Scissor") {
    return "Scissor";
  }
}

function singleGame() {}

console.log(playerSelection());