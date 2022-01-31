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
const finalResults = document.querySelector("#finalResults");


let userWinTotal = 0;
let compWinTotal = 0;

function playRound(choice) {
    let computerSelection = computerPlay();
    console.log("The computer chose " + computerSelection);
    console.log("You chose " + choice);
    roundResults.classList.add("playing");
    if (compWinTotal > 4 || userWinTotal > 4) {
        compWinTotal = 0;
        userWinTotal = 0;
        finalResults.classList.remove("playing");
        finalResults.textContent = "";
    }
    if (computerSelection === choice) {
        roundResults.textContent = "Great minds think alike! Try again!";
    } else if (computerSelection === "rock" && choice === "scissors") {
        roundResults.textContent = "Oliver scored! Rock beats scissors!";
        compWinTotal++;
    } else if (computerSelection === "paper" && choice === "scissors") {
        roundResults.textContent = "You scored! Scissors beats paper!";
        userWinTotal++;
    } else if (computerSelection === "scissors" && choice === "rock") {
        roundResults.textContent = "You scored! Rock beat scissors!";
        userWinTotal++;
    } else if (computerSelection === "rock" && choice === "paper") {
        roundResults.textContent = "You scored! Paper beats rock!";
        userWinTotal++;
    } else if (computerSelection === "paper" && choice === "rock") {
        roundResults.textContent = "Oliver scored! Paper beats rock!";
        compWinTotal++;
    } else if (computerSelection === "scissors" && choice === "paper") {
        roundResults.textContent = "Oliver scored! Scissors beats paper!";
        compWinTotal++;
    }

    scoreboardUser.textContent = `Your Score: ${userWinTotal}`;
    scoreboardOliver.textContent = `Oliver's Score: ${compWinTotal}`;

    if (userWinTotal === 5) {
        finalResults.classList.add("playing");
        finalResults.textContent = "Congratulations! You beat Oliver at Rock, Paper, Scissors!";
    } else if (compWinTotal === 5) {
        finalResults.textContent = "Uh-oh, Oliver won! Make a choice to start a new game.";
        finalResults.classList.add("playing");
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