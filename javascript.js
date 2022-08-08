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

function playerSelectionChoice() {
  const playerChoice = prompt("Please pick a hand");
  const playerHand =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  if (playerHand === "Rock") {
    return "Rock";
  } else if (playerHand === "Paper") {
    return "Paper";
  } else if (playerHand === "Scissors") {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You lose, Paper beats Rock!");
    computerScore++;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You win, Rock beats Scissors!");
    playerScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("You lose, Scissors beats Paper!");
    computerScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You win, Paper beats Rock!");
    playerScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("You lose, Rock beats Scissors!");
    computerScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You win, Scissors beats Paper!");
    playerScore++;
  } else {
    alert("something went wrong");
  }
}

let computerScore = 0;
let playerScore = 0;

function game() {
  computerScore = 0;
  playerScore = 0;
  //play 5 rounds
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerSelectionChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log("You win the game");
  } else if (playerScore < computerScore) {
    console.log("You lose the game");
  } else if (playerScore === computerScore) {
    console.log("Its a Draw!");
  }
}

game();
