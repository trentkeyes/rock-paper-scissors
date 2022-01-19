//create function for computerPlay that randomly returns rock paper, or scissors
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

//write a function called game(). Use the playRound inside this to play a five round game that keeps score and reports winner or loser at the end
function game() {
    let userWinTotal = 0;
    let compWinTotal = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner > 0) {
            userWinTotal++;
        } else if (winner < 0) {
            compWinTotal++;
        }
    }
    if (userWinTotal > compWinTotal) {
        console.log("Congratulations! You beat the computer at Rock, Paper, Scissors!");
    } else if (compWinTotal > userWinTotal) {
        console.log("Uh-oh, you lost the five-round match. Better luck next time.");
    } else {
        console.log("It's a tie after five rounds! Refresh and try again!")
    }

    //write function that plays 1 round or RPS, it should take two parameters, playerSelection, computerSelection
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay();
        //console.log("The computer chose " + computerSelection);
        //use prompt to get input from the user
        playerSelection = window.prompt("Type your response to play: Rock, Paper, or Scissors");
        //playerSelection parameter should be case insensitive
        let choice = playerSelection.toLowerCase();
        let userWinOrLose = 0;
        //function should return a string that declares the winner like "You lose! Paper beats Rock"
        if (computerSelection === choice) {
            console.log("You both made the same choice! Play again!");
        } else if (computerSelection === "rock" && choice === "scissors") {
            console.log("You lose! Rock beats scissors!");
            userWinOrLose--;
        } else if (computerSelection === "paper" && choice === "scissors") {
            console.log("You win! Scissors beats paper!");
            userWinOrLose++;
        } else if (computerSelection === "scissors" && choice === "rock") {
            console.log("You win! Rock beat scissors!");
            userWinOrLose++;
        } else if (computerSelection === "rock" && choice === "paper") {
            console.log("You win! Paper beats rock!");
            userWinOrLose++;
        } else if (computerSelection === "paper" && choice === "rock") {
            console.log("You lose! Paper beats rock!");
            userWinOrLose--;
        } else if (computerSelection === "scissors" && choice === "paper") {
            console.log("You lose! Scissors beats paper!");
            userWinOrLose--;
        }
        return userWinOrLose;
    }

}

game();

// function randomCheck() {
//     let rockCount = 0;
//     let paperCount = 0;
//     let scissorCount = 0;
//     for (let i = 0; i < 10000; i++) {
//         let result = computerPlay();
//         if (result === "rock") {
//             rockCount++;
//         } else if (result === "paper") {
//             paperCount++;
//         } else if (result === "scissors") {
//             scissorCount++;
//         }
//     } console.log("Rocks = " + rockCount);
//     console.log("Paper = " + paperCount);
//     console.log("Scissors = " + scissorCount);
//};