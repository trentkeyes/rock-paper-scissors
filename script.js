console.log("Hello");

//create function for computerPlay that randomly returns rock paper, or scissors
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function computerPlay() {
    let result = getRandom(1, 10);
    if (result <= 3) {
        return "rock";
    } else if (result > 3 && result <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

//write function that plays 1 round or RPS, it should take two parameters, playerSelection, computerSelection
function rpsRound(playerSelection, computerSelection) {
    playerSelection = window.prompt("Type your response to play: Rock, Paper, or Scissors");
    computerSelection = computerPlay();
    console.log(computerSelection);
    let choice = playerSelection.toLowerCase();
    if (computerSelection === choice) {
        console.log("You both made the same choice! Play again!");
    } else if (computerSelection === "rock" && choice === "scissors") {
        console.log("You lose! Rock beats scissors!");
    } else if (computerSelection === "paper" && choice === "scissors") {
        console.log("You win! Scissors beats paper!");
    } else if (computerSelection === "scissors" && choice === "rock") {
        console.log("You win! Rock beat scissors!");
    } else if (computerSelection === "rock" && choice === "paper") {
        console.log("You win! Paper beats rock!");
    } else if (computerSelection === "paper" && choice === "rock") {
        console.log("You lose! Paper beats rock!");
    } else if (computerSelection === "scissors" && choice === "paper") {
        console.log("You lose! Scissors beats paper!");
    }
}


console.log(rpsRound());
//function should return a string that declares the winner like "You lose! Paper beats Rock"
//playerSelection parameter should be case insensitive
//write a new function called game(). Use the playRound inside this to play a five round game that keeps score and reports winner or loser at the end
//use prompt to get input from the user