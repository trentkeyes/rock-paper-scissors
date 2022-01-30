const rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', function (event) {
    playRound(event.target.id);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', function (event) {
    playRound(event.target.id);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', function (event) {
    playRound(event.target.id);
});

const scoreboard = document.querySelector("#scoreboard");
const roundResults = document.querySelector("#roundResults");

let userWinTotal = 0;
let compWinTotal = 0;

function playRound(choice) {
    let computerSelection = computerPlay();
    console.log("The computer chose " + computerSelection);
    console.log("You chose " + choice);
    if (computerSelection === choice) {
        roundResults.textContent = "You both made the same choice! Play again!";
    } else if (computerSelection === "rock" && choice === "scissors") {
        roundResults.textContent = "You lose! Rock beats scissors!";
        compWinTotal++;
    } else if (computerSelection === "paper" && choice === "scissors") {
        roundResults.textContent = "You win! Scissors beats paper!";
        userWinTotal++;
    } else if (computerSelection === "scissors" && choice === "rock") {
        roundResults.textContent = "You win! Rock beat scissors!";
        userWinTotal++;
    } else if (computerSelection === "rock" && choice === "paper") {
        roundResults.textContent = "You win! Paper beats rock!";
        userWinTotal++;
    } else if (computerSelection === "paper" && choice === "rock") {
        roundResults.textContent = "You lose! Paper beats rock!";
        compWinTotal++;
    } else if (computerSelection === "scissors" && choice === "paper") {
        roundResults.textContent = "You lose! Scissors beats paper!";
        compWinTotal++;
    }

    scoreboardUser.textContent = `Your Score: ${userWinTotal}`;
    scoreboardOliver.textContent = `Oliver's Score: ${compWinTotal}`;

    if (userWinTotal === 5) {
        finalResults.textContent = "Congratulations! You beat Oliver at Rock, Paper, Scissors!";
    } else if (compWinTotal === 5) {
        finalResults.textContent = "Uh-oh, Oliver won! Better luck next time.";
    }
}

function computerPlay() {
    function getRandom() {
        return Math.random() * 10;
    }
    let result = getRandom();
    if (result <= 3.3333) {
        return "rock";
    } else if (result > 3.3333 && result <= 6.6666) {
        return "paper";
    } else if (result > 6.6666) {
        return "scissors";
    }
}