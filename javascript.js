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
  const computerHand = Math.floor(Math.random() * 3 + 1);
  if (computerHand === 1) {
    return "Rock";
  } else if (computerHand === 2) {
    return "Paper";
  } else if (computerHand === 3) {
    return "Scissors";
  }
}

const computerSelection = getComputerChoice()


function playerSelectionChoice() {
  const playerChoice = prompt("Please pick a hand");
  const playerHand = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerHand === "Rock") {
      return "Rock";
    }
    else if (playerHand === "Paper") {
      return "Paper";
    }
    else if (playerHand === "Scissors") {
      return "Scissors";
    }
}

const playerSelection = playerSelectionChoice()

/*
was given as a pointer to store the return values as a varible. writting down for notes.

function playRound() {
  let pSelect = playerSelection(); //store to variable
  let cSelect = computerSelection(); //store to variable
  
  if (pSelect == cSelect) { // easier to read when comparing values
    ..
  } */



function playRound() {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose, Paper beats Rock!";
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win, Rock beats Scissors!";
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose, Scissors beats Paper!";
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win, Paper beats Rock!";
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose, Rock beats Scissors!";
  }
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win, Scissors beats Paper!";
  }
  else {
    return "something went wrong"
  }
}

const computerScore = 0;
const playerScore = 0;

function game(playerSelection, computerSelection) {
}

console.log(playerSelection)
console.log(computerSelection)
console.log(playRound())